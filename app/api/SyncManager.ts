// Store
import { useDataStore } from '../store';

// Api
import { legacyUnauthAxios } from './axios';

// Config
import { LEGACY_COMPANY_ID, REPOSITORY_URL } from '../config/constants';
import { GET_COMPANY, GET_LATEST_RELEASE, GET_RELEASES } from '../config/endpoint';

// Utils
import { parseUrl } from '../utils/api';

// Types
import type { Company } from '../types/entities';
import type { CompanyResponse, GithubReleaseResponse } from '../types/responses';
import { InternalApplicationError } from '../types/errors';

// Others
import axios, { AxiosError } from 'axios';

export const getCompany = async (): Promise<Company> => {
  const url = parseUrl(GET_COMPANY, [{ key: 'companyId', value: LEGACY_COMPANY_ID }]);

  try {
    const response = await legacyUnauthAxios.get<CompanyResponse>(url);
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
    useDataStore.getState().setCompany(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};

export const getLatestRelease = async () => {
  const url = parseUrl(GET_LATEST_RELEASE, [{ key: 'repo', value: REPOSITORY_URL }]);

  try {
    const response = await axios.get<GithubReleaseResponse>(url);
    return {
      name: response.data.name,
      version: response.data.tag_name.replace(/^v/, ''),
      url: response.data.html_url,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};

export const getLatestPreRelease = async () => {
  const url = parseUrl(GET_RELEASES, [{ key: 'repo', value: REPOSITORY_URL }]);

  try {
    const response = await axios.get<GithubReleaseResponse[]>(url);
    const preReleases = response.data.filter(release => release.prerelease);
    if (preReleases.length === 0) throw new AxiosError('Not found', '404');

    return {
      name: response.data[0].name,
      version: response.data[0].tag_name.replace(/^v/, ''),
      url: response.data[0].html_url,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};
