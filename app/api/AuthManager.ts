// Store
import { useAuthStore } from '../store';
import { setLocalAuth } from '../store/local';

// Api
import { authAxios, unauthAxios } from './axios';

// Config
import { GET_DONATIONS, GET_DONOR, POST_LOGIN } from '../config/endpoint';

// Utils
import { stringToDate } from '../utils/formatters';

// Types
import type { User } from '../types/entities';
import type { LoginResponse, DonationsResponse, DonorResponse } from '../types/responses';
import { SECURE_STORAGE_KEY } from '../types/enums';
import { InternalApplicationError } from '../types/errors';

// Others
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const postLogin = async (variables: {
  username: string;
  passwordSHA256: string;
}): Promise<User> => {
  try {
    // await unauthAxios.post<BaseResponse<void>>(POST_REGISTER_DEVICE, { dev: 'fidas-app' });
    const response = await unauthAxios.post<LoginResponse>(POST_LOGIN, {
      usr: variables.username,
      pwd: variables.passwordSHA256,
      dev: 'fidas-app',
    });

    SecureStore.setItem(SECURE_STORAGE_KEY.TOKEN, response.data.token);
    setLocalAuth({
      username: variables.username,
      passwordSHA256: variables.passwordSHA256,
    });

    return await getUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};

export const getUser = async (): Promise<User> => {
  try {
    const donorResponse = await authAxios.get<DonorResponse>(GET_DONOR);
    const donationsResponse = await authAxios.get<DonationsResponse>(GET_DONATIONS);
    const donorData = donorResponse.data.data;
    const donationsData = donationsResponse.data.data;

    const user: User = {
      name: donorData.fullName,
      gender: donorData.sex as User['gender'],
      email: donorData.address.email,
      phone: donorData.address.phone,
      secondaryPhone: donorData.address.phone_alt ? donorData.address.phone_alt : undefined,
      caiCode: donorData.cai,
      birthdate: stringToDate(donorData.birthday, 'dd-mm-yyyy', '-').getTime(),
      province: donorData.section.description,
      donations: donationsData.list.map(donation => ({
        date: new Date(donation.dt).getTime(),
        type:
          donation.bloodType === 1
            ? 'SA'
            : donation.bloodType === 2
              ? 'PL'
              : donation.bloodType === 4
                ? 'PI'
                : 'SA',
      })),
      donations_count: donationsData.stats.total,
      traits: {
        group: donorData.bloodType.ab0,
        rh: donorData.bloodType.rh,
      },
    };
    useAuthStore.setState({ user });
    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};
