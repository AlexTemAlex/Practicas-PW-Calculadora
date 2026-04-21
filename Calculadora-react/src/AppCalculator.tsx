import Button from "./Button";

type AppCalculadorProps = {
  functionBackMenu: () => void;
};

function AppCalculador({ functionBackMenu }: AppCalculadorProps) {
  const buttons = [
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "/", type: "operator" },

    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "*", type: "operator" },

    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "-", type: "operator" },

    { label: "0", type: "number" },
    { label: ".", type: "decimal" },
    { label: "=", type: "equal" },
    { label: "+", type: "operator" },

    { label: "C", type: "clear" },
    { label: "⌫", type: "delete" },
  ];

  const listButtons = buttons.map((element, idx) => (
    <Button key={idx} text={element.label}></Button>
  ));

  return (
    <>
      <Button text="Back" onClick={() => functionBackMenu()}></Button>
      <br />
      <br />

      <input type="text" value={0} readOnly />
      <div>{listButtons}</div>
    </>
  );
}

export default AppCalculador;
