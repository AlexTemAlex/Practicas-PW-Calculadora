import Grid from "@mui/material/Grid";
import React from "react";
import Container from "@mui/material/Container";

type CardsGridProps = {
  children: React.ReactNode;
};

export default function CardsGrid({ children }: CardsGridProps) {
  const list = React.Children.map(children, (child) => {
    return <Grid size={{ xs: 6, md: 3 }}>{child}</Grid>;
  });

  return (
    <Container maxWidth={false} sx={{ my: 3 }}>
      <Grid container spacing={10}>
        {list}
      </Grid>
    </Container>
  );
}
