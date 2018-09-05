import { MyBox } from "./03";

const mbox1: MyBox<string> = new MyBox(
  "Hey!"
);

const cool = new MyBox<"cool">("cool");

const coolValue: "cool" = cool.get();

const mbox2: MyBox<number> = mbox1.map(
  v => v.length
);

const mbox3: MyBox<
  MyBox<number>
> = mbox1.map(v => new MyBox(v.length));

const mbox4: MyBox<
  number
> = mbox1.flatMap(
  v => new MyBox(v.length)
);

const numberBoxes = [
  new MyBox(1),
  new MyBox(2),
  new MyBox(3),
  new MyBox(4)
];

function add(a: number, b: number) {
  return a + b;
}

const numberBoxCombiner: (
  a: MyBox<number>,
  b: MyBox<number>
) => MyBox<number> = MyBox.combine(add);

const result1: MyBox<
  number
> = numberBoxes.reduce(
  numberBoxCombiner
);

function addString(
  a: string,
  b: number
) {
  return `${a}, ${b}`;
}

const stringAndNumberBoxCombiner: (
  a: MyBox<string>,
  b: MyBox<number>
) => MyBox<string> = MyBox.combine(
  addString
);

const result2: MyBox<
  string
> = numberBoxes.reduce(
  stringAndNumberBoxCombiner,
  new MyBox("Hello there numbers:")
);
