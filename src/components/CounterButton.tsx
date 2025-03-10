import React, { Component } from 'react';

type CounterButtonProps = {
  color?: string;
};

type CounterButtonState = {
  count: number;
};

class CounterButton extends Component<CounterButtonProps, CounterButtonState> {
  constructor(props: CounterButtonProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(
    nextProps: CounterButtonProps,
    nextState: CounterButtonState
  ) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        id="counter"
        color={this.props.color}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
