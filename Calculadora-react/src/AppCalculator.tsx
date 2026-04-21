import Button from "./Button";

type AppCalculadorProps = {
  functionBackMenu: () => void;
};

function AppCalculador({ functionBackMenu }: AppCalculadorProps) {
  return (
    <>
      <Button text="Back" onClick={() => functionBackMenu()}></Button>
      <p>Hola</p>
    </>
  );
}

export default AppCalculador;
