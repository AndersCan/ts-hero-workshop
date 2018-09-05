import * as React from "react";

interface HelloWorldProps {
  name: string;
}

export function HelloWorld({
  name
}: HelloWorldProps) {
  return <div>hey, {name}</div>;
}

interface HelloWorldState {
  counter: number;
}

class GoodByeWorld extends React.Component<
  HelloWorldProps,
  HelloWorldState
> {
  state: HelloWorldState;

  constructor(props: HelloWorldProps) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    const { name } = this.props;
    const { counter } = this.state;

    return (
      <div>
        {name}, {counter}
      </div>
    );
  }
}

const hello = (
  <HelloWorld name={"Hello you"} />
);

const goodbye = (
  <GoodByeWorld name={"John"} />
);
