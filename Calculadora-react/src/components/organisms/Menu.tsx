import BasicButton from "../atoms/BasicButton";

type MenuProps = {
  functionSetOption: (e: number) => void;
};

function Menu({ functionSetOption }: MenuProps) {
  const handleClick = (e: number) => {
    functionSetOption(e);
  };

  return (
    <>
      <BasicButton text="App Sum" onClick={() => handleClick(1)}></BasicButton>
      <br />
      <br />
      <BasicButton
        text="App Calculator"
        onClick={() => handleClick(2)}
      ></BasicButton>
      <br />
      <br />
      <BasicButton text="App API" onClick={() => handleClick(3)}></BasicButton>
    </>
  );
}

export default Menu;
