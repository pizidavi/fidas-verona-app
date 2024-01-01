export type LoginResponse = {
  response: string;
  userid: number;
};

export type SaltResponse = {
  response: string;
};

export type UserResponse = {
  birthdate: number; // timestamp
  caiCode: string;
  donations: {
    date: number; // timestamp
    descr: string;
    type: string;
  }[];
  donations_count: number;
  gender: string;
  mail: string;
  name: string;
  nextGoal: string;
  phone: string;
  province: string;
  secondaryPhone: string;
  taxCode: null;
  traits: {
    group: string;
    rh: string;
    type: string;
  };
};
