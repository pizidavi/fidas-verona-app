export type BaseResponse<T> = {
  code: number;
} & T;

export type LoginResponse = BaseResponse<{
  token: string;
}>;

export type DonorResponse = BaseResponse<{
  data: {
    id: number;
    donorType: string;
    cai: string;
    fullName: string;
    birthday: string; // dd-mm-yyyy
    sex: string;
    bloodType: {
      ab0: string;
      rh: string;
      code: string;
    };
    enrolment: string; // dd-mm-yyyy
    section: {
      code: number;
      description: string;
    };
    address: {
      street: string;
      postalCode: string;
      city: string;
      province: string;
      phone: string;
      phone_alt: string;
      mobile: string;
      mobile_alt: string;
      email: string;
    };
    merit: {
      description: string;
      goal: number;
    };
  };
}>;

export type DonationsResponse = BaseResponse<{
  data: {
    id: number;
    donorType: string;
    last: string;
    list: {
      bloodType: number;
      dt: string; // yyyy-mm-dd
      section: number;
    }[];
    sections: Record<string, string>;
    bloodTypes: {
      '1': string;
      '2': string;
      '4': string;
      start: string;
    };
    stats: {
      '1': number;
      '2': number;
      start: number;
      total: number;
    };
    next: {
      '1': string; // dd-mm-yyyy
      '2': string;
      '4': string;
    };
  };
}>;

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

export type GithubReleaseResponse = {
  id: number;
  name: string;
  body: string;
  tag_name: string;
  prerelease: boolean;
  html_url: string;
  published_at: string;
};
