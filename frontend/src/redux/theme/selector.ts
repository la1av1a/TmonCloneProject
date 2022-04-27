import { RootState } from "redux/rootReducer";
import { THEME_TYPE } from "styled/theme";

const themeSelector = (state: RootState): THEME_TYPE => state.theme.themeType;

export { themeSelector };
