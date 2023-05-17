import React, { createContext } from "react";
import { FilterActions, FilterStateType } from "./types";
import { initialState } from "./const";

export const FilterContext = createContext<{
  state: FilterStateType;
  dispatch: React.Dispatch<FilterActions>;
}>({
  state: initialState,
  dispatch: () => null,
});
