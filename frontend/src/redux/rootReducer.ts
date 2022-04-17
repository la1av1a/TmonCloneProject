import { combineReducers } from "redux";

import Counter from "./counter";

const reducers = combineReducers({
    counter: Counter,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;