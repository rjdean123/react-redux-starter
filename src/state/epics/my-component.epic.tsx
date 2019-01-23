import { combineEpics, Epic } from 'redux-observable';
import { filter, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { myAction } from '../actions/my-component.actions';
import { appInit, RootAction } from '../root.actions';

const myEpic: Epic<RootAction, RootAction> = (action$) =>
    action$.pipe(
        filter(isActionOf(appInit)),
        map(() => myAction()),
    );

export const myComponentEpic = combineEpics(myEpic);