import React, { useState } from "react";
import "../calculator.css";
function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (num1 === "" && num2 === "") {
      setError("Input is required");
      return false;
    }

    if (num1 === "") {
      setError("First input field is required.");
      return false;
    }

    if (num2 === "") {
      setError("Second input field is required.");
      return false;
    }

    if (isNaN(num1)) {
      setError("First input should be number");
      return false;
    }
    if (isNaN(num2)) {
        setError("Second input should be number");
        return false;
      }

    setError("");
    return true;
  };

  const performOperation = (operation) => {
    if (!validateInputs()) {
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    switch (operation) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "multiply":
        result = number1 * number2;
        break;
      case "divide":
        if (number2 === 0) {
          setError("Cannot divide by zero.");
          return;
        }
        result = number1 / number2;
        break;
      default:
        return;
    }

    setResult(result);
  };

  
  return (
    <div id="main">
      <h2>React Calculator</h2>
      <div id="input">
        <input
          type="text"
          placeholder="Num1"
          onChange={(e) => {
            setNum1(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Num2"
          onChange={(e) => {
            setNum2(e.target.value);
          }}
        ></input>
      </div>
      <div id="buttons">
        <button onClick={() => performOperation("add")}>+</button>
        <button onClick={() => performOperation("subtract")}>-</button>
        <button onClick={() => performOperation("multiply")}>*</button>
        <button onClick={() => performOperation("divide")}>/</button>
      </div>
      {error && (
        <p className="error">
          <p>Error!</p>
          {error}
        </p>
      )}
      {result !== null && !error && (
        <p className="success">
          <p>Success!</p>
          Result: {result}
        </p>
      )}
    </div>
  );
}

export default Calculator;
