export type AuthResponseType = {
  access_token: string;
  refresh_token: string;
  ttl: string;
  expires_in: string;
  token_type: string;
};

export type ResponseType = {
  objects: VacanciesResponseType[];
  total: number;
};

export type VacanciesResponseType = {
  id: number;
  profession: string;
  firmName: string;
  town: {
    id: string;
    title: string;
  };
  type_of_work: {
    id: string;
    title: string;
  };
  payment_from: number;
  payment_to: number;
  currency: string;
  vacancyRichText: string;
};

export type VacanciesType = VacanciesResponseType & { isFavourite: boolean };

export type VacancyCardType = {
  id: number;
  profession: string;
  paymentFrom: number;
  paymentTo: number;
  currency: string;
  typeOfWork: string;
  town: string;
  detailes: string;
  isFavourite: boolean;
  isDetailed?: boolean;
  handleClick?: (vacancy: VacancyCardType) => void;
};

export type IndustriesType = {
  title_rus: string;
  url_rus: string;
  title: string;
  title_trimmed: string;
  key: number;
  positions: IndustriesType[];
};
