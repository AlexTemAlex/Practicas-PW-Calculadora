import { useState } from "react";
import Button from "./Button";
import "./Calculator.css";
import calculate from "./utils/calculator";

type AppCalculadorProps = {
  functionBackMenu: () => void;
};

function AppCalculador({ functionBackMenu }: AppCalculadorProps) {
  const buttons = [
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "C", type: "clear" },
    { label: "DEL", type: "delete" },

    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "*", type: "operator" },
    { label: "/", type: "operator" },

    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "+", type: "operator" },
    { label: "-", type: "operator" },

    { label: "0", type: "number" },
    { label: "(", type: "parenthesis" },
    { label: ")", type: "parenthesis" },
    { label: "=", type: "equal" },
  ];

  const [operation, setOperation] = useState("");

  const validateParentheses = (expr: string): boolean => {
    let balance = 0;

    for (let char of expr) {
      if (char === "(") balance++;
      if (char === ")") balance--;

      if (balance < 0) return false;
    }

    return balance === 0;
  };

  const isOperator = (char: string) => ["*", "/", "+", "-"].includes(char);

  const handlerOpetarion = (value: string) => {
    setOperation((prev) => {
      const last = prev.slice(-1);

      // restrictions at the beginning
      if (!prev) {
        if (isOperator(value) && value !== "-") return prev;
        return value;
      }

      if (isOperator(value)) {
        if (last === "(") {
          return value === "-" ? prev + value : prev;
        }

        if (prev.slice(-2) === "(-") return prev;

        // change operator
        if (isOperator(last)) {
          return prev.slice(0, -1) + value;
        }
      }

      if (value === ")") {
        const numOpen = (prev.match(/\(/g) || []).length;
        const numClose = (prev.match(/\)/g) || []).length;

        if (numClose >= numOpen) return prev;

        // Do no close after operator or (
        if (isOperator(last) || last === "(") return prev;

        return prev + value;
      }

      return prev + value;
    });
  };

  const handlerClear = () => {
    setOperation("");
  };

  const handlerDelete = () => {
    setOperation((prev) => prev.slice(0, -1));
  };

  const handlerEqual = () => {
    try {
      if (!validateParentheses(operation)) {
        alert("Error-Some of the parentheses are not closed");
        return;
      }

      const result = calculate(operation);

      setOperation(result.toString());
    } catch (error) {
      alert("Error " + error);
    }
  };

  const getHandler = (type: string, label: string) => {
    switch (type) {
      case "number":
        return () => handlerOpetarion(label);
      case "clear":
        return () => handlerClear();
      case "delete":
        return () => handlerDelete();
      case "equal":
        return () => handlerEqual();
      default:
        return () => handlerOpetarion(label);
    }
  };

  const listButtons = buttons.map((buttCalculator, idx) => {
    return (
      <Button
        key={idx}
        text={buttCalculator.label}
        onClick={getHandler(buttCalculator.type, buttCalculator.label)}
      ></Button>
    );
  });

  return (
    <>
      <Button text="Back" onClick={() => functionBackMenu()}></Button>
      <div className="calculator-body">
        <input type="text" value={operation} readOnly />
        <div className="grid-c3 ">{listButtons}</div>
      </div>
    </>
  );
}

export default AppCalculador;
