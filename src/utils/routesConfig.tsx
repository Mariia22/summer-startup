import FavouriteList from "../pages/FavouriteList";
import VacancyPage from "../pages/VacancyPage";
import VacanciesPage from "../pages/VacanciesPage/Vacancies";
import { Navigate } from "react-router-dom";

export const routesConfig = [
  {
    id: 0,
    path: "/",
    element: <Navigate to="/vacancies/1" replace />
  },
  {
    id: 1,
    path: "vacancies/:page",
    element: <VacanciesPage />,
  },
  {
    id: 2,
    path: "vacancies/:page/vacancy/:id",
    element: <VacancyPage />,
  },
  {
    id: 3,
    path: "favourites",
    element: <FavouriteList />,
  },
  {
    id: 4,
    path: "favourites/vacancy/:id",
    element: <VacancyPage />,
  }
];
