import {
  MyActions,
  MyActionType,
  AddAction
} from "./04.tasks";

export const addAction: "ADD" = MyActions.add()
  .type;

export function handlesAllActions(
  action: MyActions
): string {
  switch (action.type) {
    case MyActionType.ADD: {
      const a2: AddAction = action;
      return "add";
    }
    case MyActionType.REMOVE: {
      const type: "REMOVE" =
        action.type;
      return "remove";
    }
    case MyActionType.ADD_MANY: {
      const n: number =
        action.payload.amount;
      return "add many";
    }
    default: {
      const a: never = action;
      return "";
    }
  }
}
