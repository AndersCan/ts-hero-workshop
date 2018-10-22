export interface Box<A> {
  value: A;
}
export class MyBox<A> {
  constructor(private value: A) {}

  get(): A {
    return this.value;
  }

  map<B>(fn: (a: A) => B): MyBox<B> {
    return new MyBox(fn(this.value));
  }

  flatMap<B>(
    fn: (a: A) => MyBox<B>
  ): MyBox<B> {
    return new MyBox(
      fn(this.value).value
    );
  }

  public static combine<A, B, C>(
    fn: (a: A, b: B) => C
  ): (
    a: MyBox<A>,
    b: MyBox<B>
  ) => MyBox<C> {
    return function(
      boxA: MyBox<A>,
      boxB: MyBox<B>
    ) {
      return boxA.flatMap(a =>
        boxB.map(b => fn(a, b))
      );
    };
  }
}
