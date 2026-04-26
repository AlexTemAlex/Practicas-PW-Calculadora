import Button from "./Button";

type MenuProps = {
  functionSetOption: (e: number) => void;
};

function Menu({ functionSetOption }: MenuProps) {
  const handleClick = (e: number) => {
    functionSetOption(e);
  };

  return (
    <>
      <Button text="App Sum" onClick={() => handleClick(1)}></Button>
      <br />
      <br />
      <Button text="App Calculator" onClick={() => handleClick(2)}></Button>
      <br />
      <br />
      <Button text="App API" onClick={() => handleClick(3)}></Button>
    </>
  );
}

export default Menu;
