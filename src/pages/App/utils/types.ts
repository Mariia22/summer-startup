export type FilterStateType = {
  search: string;
  industry: string | null;
  from: number | "";
  to: number | "";
};

export type InputsNameType = "from" | "to";

export enum ActionsTypes {
  changeFrom = "changeFrom",
  changeTo = "changeTo",
  changeIndustry = "changeIndustry",
  changeSearch = "changeSearch",
  clearFiltersType = "clearFiltersType",
  clearAllFiltersAndSearchType = "clearAllFiltersAndSearchType",
}

export type ChangeFromType = {
  type: ActionsTypes.changeFrom;
  payload: number | "";
};

export type ChangeToType = {
  type: ActionsTypes.changeTo;
  payload: number | "";
};

export type ChangeIndustryType = {
  type: ActionsTypes.changeIndustry;
  payload: string | null;
};

export type ClearStateType = {
  type: ActionsTypes.clearFiltersType;
};

export type ChangeSearchType = {
  type: ActionsTypes.changeSearch;
  payload: string;
};

export type ClearAllFiltersAndSearchType = {
  type: ActionsTypes.clearAllFiltersAndSearchType;
};

export type FilterActions =
  | ChangeFromType
  | ChangeToType
  | ChangeIndustryType
  | ChangeSearchType
  | ClearStateType
  | ClearAllFiltersAndSearchType;
