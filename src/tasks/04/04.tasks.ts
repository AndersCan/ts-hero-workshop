import {
  createAction,
  Action
} from "./../../actions/action-helpers";
import { ActionsUnion } from "./../../actions/action-definitions-adv";

export enum MyActionType {
  ADD = "ADD",
  ADD_MANY = "ADD_MANY",
  REMOVE = "REMOVE"
}

interface AddManyPayload {
  amount: number;
}

export const MyActions = {
  add: () =>
    createAction(MyActionType.ADD),
  addMany: (payload: AddManyPayload) =>
    createAction(
      MyActionType.ADD_MANY,
      payload
    ),
  remove: () =>
    createAction(MyActionType.REMOVE)
};

export type MyActions = ActionsUnion<
  typeof MyActions
>;

export type AddAction = ReturnType<
  typeof MyActions.add
>;
