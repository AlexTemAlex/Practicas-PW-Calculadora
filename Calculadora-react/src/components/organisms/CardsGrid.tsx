import Grid from "@mui/material/Grid";
import React from "react";
import ContainerAPI from "../atoms/ContainerAPI";

type CardsGridProps = {
  children: React.ReactNode;
};

export default function CardsGrid({ children }: CardsGridProps) {
  const list = React.Children.map(children, (child) => {
    return <Grid size={{ xs: 6, md: 3 }}>{child}</Grid>;
  });

  return (
    <ContainerAPI>
      <Grid container spacing={10}>
        {list}
      </Grid>
    </ContainerAPI>
  );
}
