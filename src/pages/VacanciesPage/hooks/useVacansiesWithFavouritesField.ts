import { getFavouritesVacancies } from "../../../utils/helpers";
import { useGetVacancies } from "../api/getVacancies";
import { VacanciesType, VacancyCardType } from "../utils/types";

export const useVacansiesWithFavouritesField = (
  token: string | null,
  page: number
) => {
  const { vacancies, isLoading, isError, error } = useGetVacancies(token, page);
  const favouriteVacancies: VacancyCardType[] = getFavouritesVacancies();
  let vacanciesWithFavoriteFlag: VacanciesType[] = [];
  if (vacancies && vacancies.length > 0) {
    if (favouriteVacancies.length > 0) {
      vacanciesWithFavoriteFlag = vacancies.map((vacancy) => {
        return favouriteVacancies.some(item => item.id === vacancy.id)
          ? { ...vacancy, isFavourite: true }
          : { ...vacancy, isFavourite: false };
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
    error
  };
};
