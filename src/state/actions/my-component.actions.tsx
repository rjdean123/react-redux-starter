import { ActionType, createStandardAction } from 'typesafe-actions';

/**
 * Dispatched when XYZ.
 */
export const myAction = createStandardAction('@myComponent/MY_ACTION')();

export type MyComponentAction = ActionType<typeof myAction>;