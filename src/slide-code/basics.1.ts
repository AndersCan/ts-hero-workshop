function basics() {
  const firstName1: string = "John";
  const age1: number = 5;

  const firstName2 = "John";
  const age2 = 5;

  interface Foo {
    bar: Bar;
  }

  interface Bar {
    buzz: string;
  }

  const foo1: Foo = {
    bar: {
      buzz: "buzz buzz"
    }
  };

  interface Fuzz {
    fuzz: string | number;
  }

  const fuzz1: Fuzz = {
    fuzz: 1000
  };
}

function functions() {
  const x = () => 10;
  const y = (a: number) => a * x();
  const z: (a: number) => number = y;

  function hello1(): void {
    console.log("Hey you!");
  }

  function hello2(input: any) {
    console.log("Hey you!");
  }

  interface Cool {
    text: string;
  }
  function coolio1(): Cool {
    return {
      text: "coolio"
    };
  }

  function coolio2(): Cool[] {
    return [
      {
        text: "coolio"
      },
      {
        text: "coolio"
      }
    ];
  }

  const fn1: (a: string) => number = (
    a: string
  ) => a.length;

  type StringToNumberFn = (
    a: string
  ) => number;

  const fn2: StringToNumberFn = (
    a: string
  ) => a.length;

  interface DynamicKeys {
    [key: string]: number;
  }

  const dynamicKeys: DynamicKeys = {
    anything: 1,
    as_long: 2,
    as_it: 3,
    is: 4,
    correct_type: 5
  };
}
