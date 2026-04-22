const precedence: Record<string, number> = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

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

const calculate = (expr: string): number => {
  const normalized = normalize(expr);
  const tokens = tokenize(normalized);
  const postfix = toPostfix(tokens);
  return evaluatePostfix(postfix);
};

export default calculate;
