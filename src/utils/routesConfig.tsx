import EmptyPage from "../pages/EmptyPage";
import FavouriteList from "../pages/FavouriteList";
import Vacancy from "../pages/Vacancy";
import VacanciesPage from "../pages/Vacancies/Vacancies";

export const routesConfig = [
  {
    id: 1,
    path: "/",
    element: <VacanciesPage />,
  },
  {
    id: 2,
    path: "vacancies/:id",
    element: <Vacancy />,
  },
  {
    id: 3,
    path: "favourites",
    element: <FavouriteList />,
  },
  {
    id: 4,
    path: "empty",
    element: <EmptyPage />,
  },
];
