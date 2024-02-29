export type Auth = {
  userId: number;
  username: string;
  passwordSalt: string;
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
    description?: string;
  }[];
  donations_count: number;
  traits: {
    group: string;
    rh: string;
    type?: string;
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
