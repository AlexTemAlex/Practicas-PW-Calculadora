import { useState } from "react";
import Button from "./Button";
import "./Calculator.css";

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

  const precedence: Record<string, number> = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
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

  const tokenize = (textInput: string) => {
    return textInput.match(/\d+\.?\d*|[+\-*/()]/g) || [];
  };

  const normalize = (expr: string) => {
    return expr.replace(/\(-/g, "(0-");
  };

  /*
  Shunting Yard's algorithm, created by Edsger Dijkstra, 
  converts mathematical expressions from infix notation (normal writing) to
  postfix notation (RPN) (stack).
  */
  const toPostfix = (tokens: string[]): string[] => {
    const output: string[] = [];
    const stack: string[] = [];

    tokens.forEach((token) => {
      if (!isNaN(Number(token))) {
        output.push(token);
      } else if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        while (stack.length && stack[stack.length - 1] !== "(") {
          output.push(stack.pop()!);
        }
        stack.pop(); // quitar "("
      } else {
        while (
          stack.length &&
          precedence[stack[stack.length - 1]] >= precedence[token]
        ) {
          output.push(stack.pop()!);
        }
        stack.push(token);
      }
    });

    return [...output, ...stack.reverse()];
  };

  const evaluatePostfix = (postfix: string[]): number => {
    const stack: number[] = [];

    postfix.forEach((token) => {
      if (!isNaN(Number(token))) {
        stack.push(Number(token));
      } else {
        const b = stack.pop()!;
        const a = stack.pop()!;

        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            stack.push(a / b);
            break;
        }
      }
    });

    return stack[0];
  };

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
      const secondLast = prev.slice(-2, -1);

      // restrictions at the beginning
      if (!prev) {
        if (isOperator(value) && value !== "-") return prev;
        return value;
      }

      if (isOperator(value)) {
        if (last === "(") {
          if (value === "-") return prev + value;
          return prev;
        }

        if (secondLast === "(" && last === "-") return prev;

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
      const normalized = normalize(operation);
      const tokens = tokenize(normalized);
      const postFix = toPostfix(tokens);
      const result = evaluatePostfix(postFix);

      setOperation(result.toString());
    } catch (error) {
      alert("Error " + error);
    }
  };

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
