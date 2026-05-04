import Menu from "../organisms/Menu";
import AppSuma from "../organisms/AppSum";
import AppCalculador from "../organisms/AppCalculator";
import AppAPI from "../organisms/AppAPI";
import { useState } from "react";

function Home() {
  const [option, setOption] = useState(0);

  const handleBackMenu = () => {
    setOption(0);
  };

  return (
    <>
      {option === 0 && <Menu functionSetOption={setOption} />}
      {option === 1 && <AppSuma functionBackMenu={handleBackMenu} />}
      {option === 2 && <AppCalculador functionBackMenu={handleBackMenu} />}
      {option === 3 && <AppAPI />}
    </>
  );
}

export default Home;
