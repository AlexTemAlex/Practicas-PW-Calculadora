import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {
  isReadOnly: boolean;
  label: string;
  value: string;
  type: string;
};

export default function OutlinedTextField({
  isReadOnly,
  label,
  value,
  type,
}: Props) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-read-only-input"
        label={label}
        value={value}
        type={type}
        slotProps={{
          input: {
            readOnly: isReadOnly,
          },
        }}
      />
    </Box>
  );
}
