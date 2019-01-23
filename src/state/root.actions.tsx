import { ActionType, createStandardAction } from 'typesafe-actions';
import { MyComponentAction } from './actions/my-component.actions';

export const appInit = createStandardAction('@app/INIT')();
export type AppAction = ActionType<typeof appInit>;

export type RootAction =
    | AppAction
    | MyComponentAction;