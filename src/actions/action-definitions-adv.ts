type FunctionType = (
  ...args: any[]
) => any;

type ActionCreatorsMapObject = {
  [actionCreator: string]: FunctionType;
};

export type ActionsUnion<
  AC extends ActionCreatorsMapObject
> = ReturnType<AC[keyof AC]>;

// todo - this should be moved to a flow slide
class Foo {
  serialize() {
    return "[Foo]";
  }
}

class Bar {
  serialize() {
    return "[Bar]";
  }
}

const foo: Foo = new Bar(); // Errors in Flow!
