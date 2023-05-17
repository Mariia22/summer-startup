import { FilterStateType } from "./types";

export const vacanciesPerPage = 4;
const maxNumberOfResultsFromAPI = 500;

export const numberOfPages = Math.ceil(
  maxNumberOfResultsFromAPI / vacanciesPerPage
);

export const initialState: FilterStateType = {
  search: "",
  industry: "",
  from: "",
  to: "",
};
