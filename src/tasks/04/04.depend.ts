import {
  MyActions,
  MyActionType,
  AddAction
} from "./04.tasks";

const addAction: "ADD" = MyActions.add()
  .type;

function handlesAllActions(
  action: MyActions
): string {
  switch (action.type) {
    case MyActionType.ADD: {
      const a2: AddAction = action;
      return "add";
    }
    case MyActionType.REMOVE: {
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
