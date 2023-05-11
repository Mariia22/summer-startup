import { VacanciesResponseType } from "../types";
import { vacanciesQueryInstance } from "../../App/api/const";
import { useQuery } from "react-query";
import { AxiosError } from "axios";

export const getVacancies = (accessToken: string | undefined) => {
  const {
    data: vacancies,
    isLoading,
    isError,
    error
  } = useQuery(
    ["vacancies", accessToken],
    () => {
      const response = vacanciesQueryInstance.get(`/vacancies/`);
      return response;
    },
    {
      retry: 2,
      enabled: !!accessToken,
      select: (response) => response.data as Array<VacanciesResponseType>
    }
  );
  return { vacancies, isLoading, isError, error: error as AxiosError };
};
