import {
  FilterStateType,
  VacancyCardType,
} from "../pages/VacanciesPage/utils/types";

export const getFavouritesVacancies = (): VacancyCardType[] => {
  const localStorageInfo = localStorage.getItem("favourite");
  let favouriteVacancies: VacancyCardType[] = [];
  localStorageInfo
    ? (favouriteVacancies = JSON.parse(localStorageInfo))
    : favouriteVacancies;

  return favouriteVacancies;
};

export const toggleFavouriteVacancy = (
  vacancy: VacancyCardType
): VacancyCardType[] => {
  const localStorageInfo: VacancyCardType[] = getFavouritesVacancies();
  const newFavourites: VacancyCardType[] = localStorageInfo.some(
    (item) => item.id === vacancy.id
  )
    ? localStorageInfo.filter((item) => item.id !== vacancy.id)
    : [...localStorageInfo, vacancy];
  return newFavourites;
};

export const saveDataToLS = (
  name: string,
  data: VacancyCardType[] | FilterStateType
): void => {
  localStorage.setItem(name, JSON.stringify(data));
};
