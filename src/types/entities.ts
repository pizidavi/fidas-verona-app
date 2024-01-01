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
    description: string;
    type: 'SA' | 'PL' | 'PI';
  }[];
  donations_count: number;
  traits: {
    group: string;
    rh: string;
    type: string;
  };
};

export type Donation = User['donations'][number];
