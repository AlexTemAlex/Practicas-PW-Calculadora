import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

type CardsGridProps = {
  children: React.ReactNode;
};

export default function CardsGrid({ children }: CardsGridProps) {
  const list = React.Children.map(children, (child) => {
    return <Grid size={{ xs: 6, md: 3 }}>{child}</Grid>;
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {list}
      </Grid>
    </Box>
  );
}
