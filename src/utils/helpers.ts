export const getFavouritesVacancies = (): number[] => {
  const localStorageInfo = localStorage.getItem("favourite");
  let favouriteVacancies: number[] = [];
  localStorageInfo
    ? (favouriteVacancies = JSON.parse(localStorageInfo))
    : favouriteVacancies;

  return favouriteVacancies;
};

export const toggleFavouriteVacancy = (id: number): number[] => {
  const localStorageInfo: number[] = getFavouritesVacancies();
  const newFavourites: number[] = localStorageInfo.includes(id)
    ? localStorageInfo.filter((item) => item !== id)
    : [...localStorageInfo, id];
  return newFavourites;
};

export const saveDataToLS = (name: string, data: any): void => {
  localStorage.setItem(name, JSON.stringify(data));
};
