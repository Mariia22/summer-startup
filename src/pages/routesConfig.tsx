import EmptyPage from "./EmptyPage";
import FavouriteList from "./FavouriteList";
import Vacancy from "./Vacancy";
import VacancyList from "./VacancyList";

export const routesConfig = [
  {
    id: 1,
    path: "/",
    element: <VacancyList />
  },
  {
    id: 2,
    path: "vacancies/:id",
    element: <Vacancy />
  },
  {
    id: 3,
    path: "favourites",
    element: <FavouriteList />
  },
  {
    id: 4,
    path: "empty",
    element: <EmptyPage />
  }
];

export type RoutesType = (typeof routesConfig)[number];
