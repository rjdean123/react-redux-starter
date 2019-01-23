import { getType } from 'typesafe-actions';
import { myAction } from '../actions/my-component.actions';
import { RootAction } from '../root.actions';

export interface IMyComponentState {
    foobar: string;
}

const initialState: IMyComponentState = {
    foobar: 'EPIC AND REDUCER DID NOT WORK.',
};

export const myComponentReducer = (state: IMyComponentState, action: RootAction): IMyComponentState => {
    if (!state) {
        return initialState;
    }
    switch (action.type) {
        case getType(myAction):
            return {
                ...state,
                foobar: 'EPIC AND REDUCER WORKED.',
            };
        default:
            return state;
    }
};

/**
 * Selectors
 */

export const getFoobar = (state: IMyComponentState) => state.foobar;
