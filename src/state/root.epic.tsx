import { combineEpics } from 'redux-observable';
import { myComponentEpic } from './epics/my-component.epic';

/**
 * All of the apps epics should be registered here
 */
export const rootEpic = combineEpics(myComponentEpic);