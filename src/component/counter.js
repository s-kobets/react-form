import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const {input: { value }} = this.props;
    const {meta: { error }} = this.props;
    console.log(this.props, error);
    return (
      <div>
        { error !== 'decrementFalse' &&
          <button onClick={this.decrement}>-</button>
        }
        <span>
          {value}
        </span>
        { error !== 'incrementFalse' &&
          <button onClick={this.increment}>+</button>
        }
      </div>
    )
  }

  increment = () => {
    this.props.input.onChange(this.props.input.value + 1)
    this.props.actions.increment();
  }

  decrement = () => {
    this.props.input.onChange(this.props.input.value - 1)
    this.props.actions.decrement();
  }
}

export default Counter