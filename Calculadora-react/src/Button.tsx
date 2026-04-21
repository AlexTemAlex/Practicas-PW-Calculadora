type MenuProps = {
  text: string;
  onClick: () => void;
};

function Button({ text, onClick }: MenuProps) {
  return (
    <>
      <button type="button" onClick={() => onClick()}>
        {text}
      </button>
    </>
  );
}

export default Button;
