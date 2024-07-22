// Store
import { useDataStore } from '../store';

// Api
import { unauthAxios } from './axios';

// Config
import { COMPANY_ID, REPOSITORY_URL } from '../config/constants';
import { GET_COMPANY, GET_EVENTS, GET_LATEST_RELEASE, GET_PUBBLICATIONS } from '../config/endpoint';

// Utils
import { parseUrl } from '../utils/api';

// Types
import { Company, News } from '../types/entities';
import { NEWS_TYPE } from '../types/enums';
import { InternalApplicationError } from '../types/errors';
import { CompanyResponse, EventResponse, PublicationResponse } from '../types/responses';

// Others
import axios from 'axios';

export const getCompany = async (): Promise<Company> => {
  const url = parseUrl(GET_COMPANY, [{ key: 'companyId', value: COMPANY_ID }]);

  try {
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
    useDataStore.getState().setCompany(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};

export const getNews = async (): Promise<News[]> => {
  const pubblicationsUrl = parseUrl(GET_PUBBLICATIONS, [{ key: 'companyId', value: COMPANY_ID }]);
  const eventsUrl = parseUrl(GET_EVENTS, [{ key: 'companyId', value: COMPANY_ID }]);

  try {
    const pubblicationsResponse = await unauthAxios.get<PublicationResponse>(pubblicationsUrl);
    const eventsResponse = await unauthAxios.get<EventResponse>(eventsUrl);

    const pubblicationsData = pubblicationsResponse.data.publications.map(publication => ({
      id: publication.id,
      type: NEWS_TYPE.PUBLICATION,
      title: publication.title,
      description: publication.description,
      date: new Date(publication.date).getTime(),
      image: publication.imagepath,
      attachments:
        publication.publicationmedias?.length > 0
          ? publication.publicationmedias.map(media => ({
              id: media.id,
              name: media.name,
              position: media.position,
              type: media.type,
            }))
          : undefined,
    }));
    const eventsData = eventsResponse.data.events.map(event => ({
      id: event.id,
      type: NEWS_TYPE.EVENT,
      title: event.title,
      description: event.description,
      date: new Date(event.date).getTime(),
      image: event.imagepath,
      attachments:
        event.eventmedias?.length > 0
          ? event.eventmedias.map(media => ({
              id: media.id,
              name: media.name,
              position: media.position,
              type: media.type,
            }))
          : undefined,
    }));

    return [...pubblicationsData, ...eventsData].sort((a, b) => b.date - a.date).slice(0, 10);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else throw new InternalApplicationError();
  }
};

export const getLatestVersion = async () => {
  const url = parseUrl(GET_LATEST_RELEASE, [{ key: 'repo', value: REPOSITORY_URL }]);

  try {
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
