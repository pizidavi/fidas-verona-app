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
  donations_count: string;
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

export type CompanyResponse = {
  id: number;
  name: string;
  description: string;
  companygroups: {
    id: number;
    isdefault: number;
    name: string;
    nametype?: string;
    phone1?: string;
    phone2?: string;
    email?: string;
    website?: string;
    address: string;
    latitude: number;
    longitude: number;
    companyteams: {
      id: number;
      name: string;
      namesuffix: string;
      memberof: string;
      description: string;
      position: number;
      imagename: string;
      imagepath: string;
    }[];
  }[];
  companyteammemberofs: {
    id: number;
    name: string;
  }[];
  companymedias: {
    id: number;
    name: string;
    path: string;
    type: number;
    position: number;
  }[];
  companytags: {
    id: number;
    isdefault: number;
    tagname: string;
    parent?: {
      id: number;
      isdefault: number;
      tagname: string;
    };
  }[];
  videos: {
    id: number;
    title: string;
    status: number;
    position: number;
    ytvideourl: string;
    ytvid: string;
  }[];
  photos: {
    id: number;
    title: string;
    status: number;
    position: number;
    imagename: string;
    imagepath: string;
  }[];
};

export type PublicationResponse = {
  publications: {
    id: number;
    date: string; // ISO 8601
    title: string;
    description: string;
    abstract: string;
    type: number;
    status: number;
    imagename: string;
    imagepath: string;
    publicationmedias: {
      id: number;
      name: string;
      path: string;
      position: number;
      type: number;
    }[];
  }[];
};

export type EventResponse = {
  events: {
    id: number;
    date: string; // ISO 8601
    title: string;
    description: string;
    abstract: string;
    status: number;
    imagename: string;
    imagepath: string;
    eventmedias: {
      id: number;
      name: string;
      path: string;
      position: number;
      type: number;
    }[];
  }[];
};
