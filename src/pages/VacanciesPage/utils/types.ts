export type AuthResponseType = {
  access_token: string;
  refresh_token: string;
  ttl: string;
  expires_in: string;
  token_type: string;
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
