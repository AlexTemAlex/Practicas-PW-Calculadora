import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleClick = () => {
    const total = Number(num1) + Number(num2);
    alert("The result is " + total);
  };

  return (
    <>
      <form>
        <p>Number 1</p>
        <input
          type={"number"}
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <p>Number 2</p>
        <input
          type={"number"}
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <br></br>
        <button type="submit" onClick={() => handleClick()}>
          Enviar
        </button>
      </form>
    </>
  );
}
export default App;
