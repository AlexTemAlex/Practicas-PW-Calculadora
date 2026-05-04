import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type MenuProps = {
  text: string;
  onClick?: () => void;
};

function BasicButton({ text, onClick }: MenuProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => onClick?.()}>
        {text}
      </Button>
    </Stack>
  );
}

export default BasicButton;
