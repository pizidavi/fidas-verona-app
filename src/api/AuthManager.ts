// Redux
import { store } from '../store';
import { getLocalAuth, setLocalAuth } from '../store/local';
import { setUser } from '../store/slices/authSlice';

// Api
import { secureAxios, unauthAxios } from './axios';

// Config
import { AUTHORIZATION_HEADER, COMPANY_ID, X_WSSE_HEADER_KEY } from '../config/constants';
import { GET_USER, POST_ACCOUNT_SALT, POST_LOGIN } from '../config/endpoint';

// Utils
import { generateSaltedPassword, generateXWsseHeader, parseUrl } from '../utils/api';

// Types
import { User } from '../types/entities';
import { InternalApplicationError } from '../types/errors';
import { LoginRequest } from '../types/requests';
import { LoginResponse, SaltResponse, UserResponse } from '../types/responses';

// Others
import axios from 'axios';

export const postLogin = async (request: LoginRequest): Promise<void> => {
  try {
    const saltResponse = await unauthAxios.post<SaltResponse>(POST_ACCOUNT_SALT, {
      username: request.username,
    });

    const saltedPassword = generateSaltedPassword(request.password, saltResponse.data.response);

    const data = new URLSearchParams();
    data.append('device', '2');
    data.append('pushtoken', 'notoken');
    const loginResponse = await secureAxios.post<LoginResponse>(POST_LOGIN, data, {
      headers: {
        Authorization: AUTHORIZATION_HEADER,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        [X_WSSE_HEADER_KEY]: generateXWsseHeader(request.username, saltedPassword),
      },
    });

    setLocalAuth({
      userId: loginResponse.data.userid,
      username: request.username,
      passwordSalt: saltedPassword,
    });

    await getUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};

export const getUser = async (): Promise<User> => {
  const { userId } = await getLocalAuth();
  const url = parseUrl(GET_USER, [
    { key: 'companyId', value: COMPANY_ID },
    { key: 'userId', value: userId },
  ]);

  try {
    const userResponse = await secureAxios.post<UserResponse>(url);
    const data = userResponse.data;

    const user: User = {
      name: data.name,
      gender: data.gender as User['gender'],
      email: data.mail,
      phone: data.phone,
      secondaryPhone: data.secondaryPhone ? data.secondaryPhone : undefined,
      caiCode: data.caiCode,
      birthdate: data.birthdate,
      province: data.province,
      donations: data.donations
        .sort((a, b) => b.date - a.date)
        .map(donation => ({
          date: donation.date,
          description: donation.descr,
          type: donation.type as User['donations'][number]['type'],
        })),
      donations_count: data.donations_count,
      traits: {
        group: data.traits.group,
        rh: data.traits.rh,
        type: data.traits.type ? data.traits.type : undefined,
      },
    };
    store.dispatch(setUser(user));
    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};
