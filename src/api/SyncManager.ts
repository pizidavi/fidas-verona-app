// Redux
import { store } from '../store';
import { setCompany } from '../store/slices/configSlice';

// Api
import { unauthAxios } from './axios';

// Config
import { COMPANY_ID, REPOSITORY_URL } from '../config/constants';
import { GET_COMPANY, GET_LATEST_RELEASE } from '../config/endpoint';

// Utils
import { parseUrl } from '../utils/api';

// Types
import { Company } from '../types/entities';
import { InternalApplicationError } from '../types/errors';
import { CompanyResponse } from '../types/responses';

// Others
import axios from 'axios';

export const getCompany = async (): Promise<Company> => {
  try {
    const url = parseUrl(GET_COMPANY, [{ key: 'companyId', value: COMPANY_ID }]);
    const response = await unauthAxios.get<CompanyResponse>(url);
    const data: Company = {
      name: response.data.name,
      description: response.data.description,
      donationsCenters: response.data.companygroups
        .filter(group => group.name.startsWith('_3:'))
        .map(group => ({
          id: group.id,
          name: group.name
            .replace('_3:', '')
            .replace(/–/gi, '-')
            .replace(/^punto raccolta -/gi, '')
            .trim(),
          address: group.address.replace(/–/gi, '-'),
          phone1: group.phone1,
          phone2: group.phone2,
          email: group.email,
        })),
    };
    store.dispatch(setCompany(data));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};

export const getLatestVersion = async () => {
  try {
    const url = parseUrl(GET_LATEST_RELEASE, [{ key: 'repo', value: REPOSITORY_URL }]);
    const response = await axios.get(url);
    return {
      tag_name: response.data.tag_name,
      version: response.data.tag_name.replace(/^v/, ''),
      url: response.data.html_url,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};
