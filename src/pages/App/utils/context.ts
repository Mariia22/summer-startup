import React, { createContext } from "react";
import { FilterStateType, FilterActions } from "./types";

export const initialState: FilterStateType = {
  search: "",
  industry: "",
  from: "",
  to: "",
};

export const FilterContext = createContext<{
  state: FilterStateType;
  dispatch: React.Dispatch<FilterActions>;
}>({
  state: initialState,
  dispatch: () => null,
});
