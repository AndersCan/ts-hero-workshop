import * as React from "react";

// # React tasks

// ## Task 1
// 1. Create a functional component with 0 props
function task11() {
  return <div> hello </div>;
}
// 2. Create a functional component with 3 props of your choice
interface MyProps {
  one: 1;
  two: "two";
  three: number;
}
function task12(props: MyProps) {
  return <div> {props} </div>;
}
// ## Task 2
// 1. Create a component that extends React.Component (a stateful component)
class Task21 extends React.Component {
  render() {
    return <div> hello </div>;
  }
}
// 2. Create a component that extends React.Component with 3 random props
class Task22 extends React.Component<
  MyProps
> {
  render() {
    return <div> {this.props} </div>;
  }
}
// 3. Create a component that extends React.Component and has 3 random props as its internal state
interface MyState {
  one: 1;
  two: "two";
  three: number;
}
class Task23 extends React.Component<
  MyProps,
  MyState
> {
  render() {
    return <div> {this.props} </div>;
  }
}
// ## Task 3
// 1. With a stateful component, add a <button> with a `onClick` handler.
class Task31 extends React.Component<
  MyProps,
  MyState
> {
  render() {
    return (
      <button
        onClick={e => console.log(e)}
      >
        Big Button
      </button>
    );
  }
}
// 2. Make the `onClick` modify the state via `setState`
class Task32 extends React.Component<
  MyProps,
  MyState
> {
  render() {
    return (
      <button
        onClick={e =>
          this.setState({
            ...this.state,
            three: 3 * (3 / 3)
          })
        }
      >
        Big Button
      </button>
    );
  }
}
// ## Task 4
// 1. Create a functional component with [renderProps](https://reactjs.org/docs/render-props.html)
interface Task41 {
  render: (
    props: MyProps
  ) => JSX.Element;
}
function task41(props: Task41) {
  const myRenderProps: MyProps = {
    one: 1,
    two: "two",
    three: 333333333333
  };
  return (
    <div>
      {props.render(myRenderProps)}
    </div>
  );
}
