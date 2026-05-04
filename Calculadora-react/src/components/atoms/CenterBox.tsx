import Box from "@mui/material/Box";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CenterBox({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
