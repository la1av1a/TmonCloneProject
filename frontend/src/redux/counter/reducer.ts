import { CountActions, CounterActionType } from './action'
import { createReducer } from 'typesafe-actions'

export interface CounterState {
  count: number;
};

// 초기상태를 선언합니다.
const initialState: CounterState = {
  count: 0
};

const counter = createReducer<CounterState, CounterActionType>(initialState, {
  [CountActions.IncCount]: (state: CounterState) => ({ count: state.count + 1 }), 
  [CountActions.DecCount]: (state: CounterState) => ({ count: state.count - 1 }),
  [CountActions.SetCount]: (state: CounterState, action) => ({ count: state.count + action.payload }) 
});

export default counter