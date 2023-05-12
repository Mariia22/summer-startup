import { getFavouritesVacancies } from "../../../utils/helpers";
import { useGetVacancies } from "../api/getVacancies";
import { VacanciesType } from "../types";

export const useVacansiesWithFavouritesField = (
  token: string | null,
  page: number
) => {
  const { vacancies, isLoading, isError, error } = useGetVacancies(token, page);
  const favouriteVacancies: number[] = getFavouritesVacancies();
  let vacanciesWithFavoriteFlag: VacanciesType[] = [];
  if (vacancies && vacancies.length > 0) {
    if (favouriteVacancies.length > 0) {
      vacanciesWithFavoriteFlag = vacancies.map((item) => {
        return favouriteVacancies.includes(item.id)
          ? { ...item, isFavourite: true }
          : { ...item, isFavourite: false };
      });
    } else {
      vacanciesWithFavoriteFlag = vacancies.map((item) => {
        return { ...item, isFavourite: false };
      });
    }
  }
  return {
    vacanciesWithFavoriteFlag,
    isLoading,
    isError,
    error,
  };
};
