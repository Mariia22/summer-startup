import { queryInstance } from "../../../utils/const";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { IndustriesType } from "../../../pages/VacanciesPage/utils/types";
import { SelectItem } from "@mantine/core";

export const useGetIndustries = (token: string | null) => {
  const {
    data: industries,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["industries", token],
    () => {
      const response = queryInstance.get(`catalogues`);
      return response;
    },
    {
      retry: false,
      enabled: !!token,
      select: (response) => {
        const catalogues: SelectItem[] = response.data.reduce(
          (acc: SelectItem[], item: IndustriesType) => {
            return [...acc, { value: item.key, label: item.title_rus }];
          },
          []
        );
        return catalogues;
      },
    }
  );
  return { industries, isLoading, isError, error: error as AxiosError };
};
