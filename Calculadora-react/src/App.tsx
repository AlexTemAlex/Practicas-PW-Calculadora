import { useState } from "react";
import AppSuma from "./AppSum";
import Menu from "./Menu";
import AppCalculador from "./AppCalculator";

function App() {
  const [option, setOption] = useState(0);

  const handleBackMenu = () => {
    setOption(0);
  };

  return (
    <>
      {option === 0 && <Menu functionSetOption={setOption} />}
      {option === 1 && <AppSuma functionBackMenu={handleBackMenu} />}
      {option === 2 && <AppCalculador functionBackMenu={handleBackMenu} />}
    </>
  );
}
export default App;
