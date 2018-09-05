import { PendingState } from "./02.tasks";

function printPendingState(
  ps: PendingState
) {
  switch (ps) {
    case "Started": {
      return "has started";
    }
    case "Stopped": {
      return "has stopped";
    }
    default: {
      const state: never = ps;
      return "invalid";
    }
  }
}
