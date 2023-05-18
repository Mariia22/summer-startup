import { FilterStateType } from "./types";

export const vacanciesPerPage = 4;
export const staleTime = 30 * (60 * 1000); // time in ms
export const maxNumberOfResultsFromAPI = 500;
export const initialState: FilterStateType = {
  search: "",
  industry: "",
  from: "",
  to: "",
};
