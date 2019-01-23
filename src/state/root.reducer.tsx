import { combineReducers } from 'redux';
import { IMyComponentState, myComponentReducer } from './reducers/my-component.reducer';

export interface IRootState {
    myComponentState: IMyComponentState;
}

export const rootReducer = combineReducers<IRootState>({
    myComponentState: myComponentReducer,
});

/**
 * Sub-state selectors
 */
export const getMyComponentState = (state: IRootState) => state.myComponentState;