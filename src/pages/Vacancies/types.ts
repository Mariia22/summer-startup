export type AuthResponseType = {
  access_token: string;
  refresh_token: string;
  ttl: string;
  expires_in: string;
  token_type: string;
};

export type VacanciesResponseType = {
  id_vacancy: number;
  profession: string;
  firm_name: string;
  town: {
    id: string;
    title: string;
  };
  type_of_work: string;
  payment_from: number;
  payment_to: number;
  currency: string;
};
