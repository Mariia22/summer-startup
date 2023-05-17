import { initialState } from "./const";
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
    case ActionsTypes.clearStateType:
      return {
        ...initialState,
      };
      break;
    default:
      throw Error("Unknown action");
  }
}
