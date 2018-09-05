import {
  createAction,
  Action
} from "./action-helpers";
import { ActionsUnion } from "./action-definitions-adv";

enum MyActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  ADD_MANY = "ADD_MANY"
}

interface AddManyPayload {
  amount: number;
}

export const MyActions = {
  add: () =>
    createAction(MyActionType.ADD),
  remove: () =>
    createAction(MyActionType.REMOVE),
  addMany: (payload: AddManyPayload) =>
    createAction(
      MyActionType.ADD_MANY,
      payload
    )
};

export type MyActions = ActionsUnion<
  typeof MyActions
>;

type AddAction1 = Action<
  MyActionType.ADD
>;
const add1: AddAction1 = MyActions.add();

type AddAction2 = ReturnType<
  typeof MyActions.add
>;
const add2: AddAction2 = MyActions.add();

function handlesAllActions(
  action: MyActions
): string {
  // const a1: AddAction2 = action; // fails
  switch (action.type) {
    case MyActionType.ADD: {
      const a2: AddAction2 = action;
      return "add";
    }
    case MyActionType.REMOVE: {
      return "remove";
    }
    case MyActionType.ADD_MANY: {
      action;
      action.payload.amount;
      return "add many";
    }
    default: {
      const a: never = action;
      return "";
    }
  }
}
