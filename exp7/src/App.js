import React, { useState } from 'react';
import './App.css';

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(0); // Step starts from 0
  const [isFirstAction, setIsFirstAction] = useState(true); // Track first increment/decrement

  return (
    <div className="counter-box">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <label>
        Step Size:
        <input
          type="number"
          value={step}
          onChange={(e) => {
            setStep(parseInt(e.target.value, 10) || 0); // Ensure step is parsed as an integer
            setIsFirstAction(true); // Reset first action flag when step changes
          }}
        />
      </label>
      <div className="button-group">
        <button
          onClick={() => {
            if (isFirstAction) {
              setCount(step + 1); // Start from step + 1
              setIsFirstAction(false); // Disable first action logic
            } else {
              setCount((prevCount) => prevCount + 1); // Increment by 1
            }
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            if (isFirstAction) {
              setCount(step - 1); // Start from step - 1
              setIsFirstAction(false); // Disable first action logic
            } else {
              setCount((prevCount) => prevCount - 1); // Decrement by 1
            }
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(0); // Reset count to 0
            setStep(0); // Reset step to 0
            setIsFirstAction(true); // Reset first action flag
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;