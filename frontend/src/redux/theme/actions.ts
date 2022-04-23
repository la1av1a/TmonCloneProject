import { THEME_TYPE } from "styled/theme";
import { createAction } from "typesafe-actions";
//createAction
export enum ThemeActions {
  SET_THEME = "theme/SET_THEME",
}
export const setTheme = createAction(ThemeActions.SET_THEME)<THEME_TYPE>();
