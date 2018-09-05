function generics() {
  function arrayIdentity1(arr: any[]) {
    return arr;
  }

  const xs1: number[] = [1, 2, 3];
  const xs2: number[] = arrayIdentity1(
    xs1
  );

  const xs3: string[] = arrayIdentity1(
    xs1
  );

  function arrayIdentity2<T>(
    arr: T[]
  ): T[] {
    return arr;
  }

  const ys1: number[] = [1, 2, 3];
  const ys2: number[] = arrayIdentity2(
    ys1
  );

  // fails
  const ys3: string[] = arrayIdentity2(
    ys1
  );
  // fails
  const ys4: number[] = arrayIdentity2<
    string[]
  >(ys1);

  function pick<T, K extends keyof T>(
    obj: T,
    key: K
  ): T[K] {
    return obj[key];
  }

  const test1 = {
    a: 5,
    b: "hello"
  };

  const a1: number = pick(test1, "a");
  const b1: string = pick(test1, "b");
  const b2: number = pick(test1, "b"); // error
  const b3: number = pick(test1, "c"); // error

  const test2 = [1, 2, 3];
  const test2Pop = pick(test2, "pop");
  const test3Pop: () =>
    | number
    | undefined = pick(test2, "pop");
}
