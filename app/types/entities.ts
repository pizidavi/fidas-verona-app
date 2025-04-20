// Types
import type { NEWS_TYPE } from './enums';

export type Auth = {
  username: string;
  passwordSHA256: string;
};

export type User = {
  name: string;
  gender: 'M' | 'F';
  email: string;
  phone: string;
  secondaryPhone?: string;
  caiCode: string;
  birthdate: number;
  province: string;
  donations: {
    date: number;
    type: 'SA' | 'PL' | 'PI';
  }[];
  donations_count: number;
  traits: {
    group: string;
    rh: string;
  };
};

export type Donation = User['donations'][number];

export type Company = {
  name: string;
  description: string;
  donationsCenters: {
    id: number;
    name: string;
    address: string;
    phone1?: string;
    phone2?: string;
    email?: string;
  }[];
};

export type DonationsCenter = Company['donationsCenters'][number];

export type News = {
  id: number;
  type: NEWS_TYPE;
  title: string;
  description: string;
  date: number;
  image: string;
  attachments?: Attachment[];
};

export type Attachment = {
  id: number;
  name: string;
  position: number;
  type: number;
};
