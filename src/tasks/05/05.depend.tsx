import * as React from "react";

import { CoolComponent } from "./05.tasks";

function handleCoolClick(
  a: string
): string {
  return a
    .split("")
    .reverse()
    .join("");
}
const cool = (
  <CoolComponent
    coolClick={handleCoolClick}
    crazyClick={e =>
      e.currentTarget.className
    }
  />
);
