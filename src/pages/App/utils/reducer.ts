import { initialState } from "./context";
import { ActionsTypes, FilterActions, FilterStateType } from "./types";

export function reducer(state: FilterStateType, action: FilterActions) {
  switch (action.type) {
    case ActionsTypes.changeFrom:
      return { ...state, from: action.payload };
      break;
    case ActionsTypes.changeTo:
      return { ...state, to: action.payload };
      break;
    case ActionsTypes.changeIndustry:
      return { ...state, industry: action.payload };
      break;
    case ActionsTypes.changeSearch:
      return { ...state, search: action.payload };
      break;
    case ActionsTypes.clearFiltersType:
      return { ...initialState, search: state.search };
      break;
    case ActionsTypes.clearAllFiltersAndSearchType:
      return { ...initialState };
      break;
    default:
      throw Error("Unknown action");
  }
}
