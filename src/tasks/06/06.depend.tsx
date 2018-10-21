import * as React from "react";

import { SquashScoreComp } from "./comp";

const x = (
  <SquashScoreComp
    name="jon"
    score={10}
  />
);

/**
  These lines should give an error
const error1 = (
  <SquashScoreComp
    name="jon"
    score="10" // error
  />
);

const error2 = (
  <SquashScoreComp
    name={10}
    score={100} // error
  />
);

 */
