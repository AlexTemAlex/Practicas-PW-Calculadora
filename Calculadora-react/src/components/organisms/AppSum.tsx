import { useState } from "react";
import BasicButton from "../atoms/BasicButton";
import OutlinedTextField from "../atoms/OutlinedTextField";
import CenterBox from "../atoms/CenterBox";

type AppSumProps = {
  functionBackMenu: () => void;
};

function AppSum({ functionBackMenu }: AppSumProps) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleSum = () => {
    const total = Number(num1) + Number(num2);
    alert("The result is " + total);
  };

  return (
    <CenterBox>
      <BasicButton text="Back" onClick={() => functionBackMenu()}></BasicButton>
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
        <br />
        <br />
        <button type="submit" onClick={() => handleSum()}>
          Enviar
        </button>
      </form>
    </CenterBox>
  );
}
export default AppSum;
