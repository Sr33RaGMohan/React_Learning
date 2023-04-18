import React, { useState } from 'react';

function CounterWrapper() {
  const [count, setCount] = useState(0);

  return (
    <Counter count={count} setCount={setCount} />
  );
}

class Counter extends React.Component {
  render() {
    const { count, setCount } = this.props;

    const handleClick = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }
}