import {
  createAction,
  Action
} from "./../../actions/action-helpers";
import { ActionsUnion } from "./../../actions/action-definitions-adv";

export enum MyActionType {
  ADD = "ADD"
}

export const MyActions = {
  add: () =>
    createAction(MyActionType.ADD)
};

export type MyActions = ActionsUnion<
  typeof MyActions
>;

export type AddAction = unknown; //???
