import { ResponseType } from "../utils/types";
import { queryInstance } from "../../../utils/const";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { vacanciesPerPage } from "../utils/const";

export const useGetVacanciesByFilter = (
  token: string | null,
  page: number,
  catalogues: string | null = "",
  keyword: string | "" = "",
  paymentFrom: number | string = "",
  paymentTo: number | string = ""
) => {
  const {
    data: vacancies,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["vacancies", token, page, catalogues, keyword, paymentFrom, paymentTo],
    () => {
      const response = queryInstance.get(
        `vacancies/?page=${page}&count=${vacanciesPerPage}&published=1&catalogues=${catalogues}&keyword=${keyword}&payment_from=${paymentFrom}&payment_to=${paymentTo}`
      );
      return response;
    },
    {
      retry: false,
      enabled: !!token,
      select: (response) => response.data as ResponseType,
    }
  );
  return { vacancies, isLoading, isError, error: error as AxiosError };
};
