import { useState } from "react";
import AppSuma from "./components/organisms/AppSum";
import Menu from "./components/organisms/Menu";
import AppCalculador from "./components/organisms/AppCalculator";
import AppAPI from "./components/organisms/AppAPI";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [option, setOption] = useState(0);

  const handleBackMenu = () => {
    setOption(0);
  };

  return (
    <>
      <CssBaseline />

      {option === 0 && <Menu functionSetOption={setOption} />}
      {option === 1 && <AppSuma functionBackMenu={handleBackMenu} />}
      {option === 2 && <AppCalculador functionBackMenu={handleBackMenu} />}
      {option === 3 && <AppAPI />}
    </>
  );
}
export default App;
