import BasicButton from "../atoms/BasicButton";
import CenterBox from "../atoms/CenterBox";
type MenuProps = {
  functionSetOption: (e: number) => void;
};

function Menu({ functionSetOption }: MenuProps) {
  const handleClick = (e: number) => {
    functionSetOption(e);
  };

  return (
    <CenterBox>
      <BasicButton text="App Sum" onClick={() => handleClick(1)}></BasicButton>
      <BasicButton
        text="App Calculator"
        onClick={() => handleClick(2)}
      ></BasicButton>
      <BasicButton text="App API" onClick={() => handleClick(3)}></BasicButton>
    </CenterBox>
  );
}

export default Menu;
