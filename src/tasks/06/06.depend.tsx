import * as React from "react";

import { SquashScoreComp } from "./comp";

const x = (
  <SquashScoreComp
    name="jon"
    score={10}
  />
);

const error = (
  <SquashScoreComp
    name="jon"
    score="10" // error
  />
);
