function typeLitterals() {
  const firstName1 = "John";
  const age1 = 5;

  const firstName2: string = "John";
  const age2: number = 5;

  const firstName3: "John" = "John";
  const age3: 5 = 5;

  const p1 = "person 1";
  const p2 = "person 2";

  const cond1 = p1 === p2; // error
  // '"person 1"' and '"person 2"'
  // have no overlap; always false

  const p3: string = "person 3";
  const cond2 = p1 === p3; // ok
}
