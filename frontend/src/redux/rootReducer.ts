import { combineReducers } from "redux";

import Counter from "./counter";
import Github from "./github";
import Theme from "./theme";

const reducers = combineReducers({
  counter: Counter,
  github: Github,
  theme: Theme,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
