import { ThemeActions } from "./actions";
import * as actions from "./actions";
import { ActionType, createReducer } from "typesafe-actions";
import { produce } from "immer";
import { THEME_TYPE } from "styled/theme";

export type ThemeActionType = ActionType<typeof actions>;

export interface ThemeState {
  themeType: THEME_TYPE;
}

// 초기상태를 선언합니다.
const initialState: ThemeState = {
  themeType: THEME_TYPE.LIGHT,
};

const theme = createReducer<ThemeState, ThemeActionType>(initialState, {
  [ThemeActions.SET_THEME]: (state: ThemeState, action) =>
    produce(state, (draft) => {
      draft.themeType = action.payload;
    }),
});

export default theme;
