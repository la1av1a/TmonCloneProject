import { createAction, ActionType } from 'typesafe-actions'
//createAction
export enum CountActions {
    IncCount = 'INC_COUNT',
    DecCount = 'DEC_COUNT',
    SetCount = 'SET_COUNT'
}

export const increase = createAction(CountActions.IncCount)();
export const decrease = createAction(CountActions.DecCount)();
export const setCount = createAction(CountActions.SetCount)<number>(); 

const actions = { increase, decrease, setCount }; 
export type CounterActionType = ActionType<typeof actions>;

