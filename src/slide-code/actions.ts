import { createAction } from "./../actions/action-helpers";
import { ActionsUnion } from "./../actions/action-definitions-adv";

enum MyActionType {
  ADD = "ADD"
}

export const MyActions = {
  add: () =>
    createAction(MyActionType.ADD)
};

export type MyActions = ActionsUnion<
  typeof MyActions
>;
