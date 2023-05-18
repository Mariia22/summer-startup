import { getFavouritesVacancies } from "../../../utils/helpers";
import { useGetVacanciesByFilter } from "../api/getVacancies";
import {
  VacanciesResponseType,
  VacanciesType,
  VacancyCardType,
} from "../utils/types";

export const useVacansiesWithFavouritesField = (
  token: string | null,
  page: number,
  keyword?: string,
  catalogues?: string | null,
  paymentFrom?: number | string,
  paymentTo?: number | string
) => {
  const { vacancies, isLoading, isError, error } = useGetVacanciesByFilter(
    token,
    page,
    catalogues,
    keyword,
    paymentFrom,
    paymentTo
  );
  const favouriteVacancies: VacancyCardType[] = getFavouritesVacancies();
  let vacanciesWithFavoriteFlag: VacanciesType[] = [];
  const objects = vacancies?.objects;
  const total = vacancies?.total;
  if (objects && objects.length > 0) {
    if (favouriteVacancies.length > 0) {
      vacanciesWithFavoriteFlag = objects.map(
        (vacancy: VacanciesResponseType) => {
          return favouriteVacancies.some(
            (item: VacancyCardType) => item.id === vacancy.id
          )
            ? { ...vacancy, isFavourite: true }
            : { ...vacancy, isFavourite: false };
        }
      );
    } else {
      vacanciesWithFavoriteFlag = objects.map((item: VacanciesResponseType) => {
        return { ...item, isFavourite: false };
      });
    }
  }
  return {
    vacanciesWithFavoriteFlag,
    total,
    isLoading,
    isError,
    error,
  };
};
