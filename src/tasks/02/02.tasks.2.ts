import { PendingState } from "./02.tasks.1";

const Started = PendingState.Started;

const Stopped = PendingState.Stopped;

function printPendingState(
  ps: PendingState
) {
  switch (ps) {
    // TODO: missing cases
    default: {
      const state: never = ps;
    }
  }
  return assertUnreachable(ps);
}

function assertUnreachable(
  x: never
): never {
  throw new Error(
    "Didn't expect to get here"
  );
}
