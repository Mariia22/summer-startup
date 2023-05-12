import { VacanciesResponseType } from "../types";
import { queryInstance } from "../../../utils/const";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { vacanciesPerPage } from "../const";

export const useGetVacancies = (token: string | null, page: number) => {
  const {
    data: vacancies,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["vacancies", token, page],
    () => {
      const response = queryInstance.get(
        `vacancies/?page=${page}&count=${vacanciesPerPage}`
      );
      return response;
    },
    {
      retry: false,
      enabled: !!token,
      select: (response) =>
        response.data.objects as Array<VacanciesResponseType>,
    }
  );
  return { vacancies, isLoading, isError, error: error as AxiosError };
};
