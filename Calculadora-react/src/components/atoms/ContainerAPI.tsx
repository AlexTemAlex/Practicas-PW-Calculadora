import { Container } from "@mui/system";
import React from "react";

type ContainerAPIProps = {
  children: React.ReactNode;
};

export default function ContainerAPI({ children }: ContainerAPIProps) {
  return (
    <Container maxWidth={false} sx={{ my: 3 }}>
      {children}
    </Container>
  );
}
