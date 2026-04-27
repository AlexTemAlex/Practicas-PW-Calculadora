import { Box } from "@mui/system";
import Grid from "@mui/system/Grid";
import styled from "@mui/system/styled";
import ContainerAPI from "../atoms/ContainerAPI";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Pokemon } from "../../types/pokemon";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  border: "1px solid",
  borderColor: "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
    borderColor: "#444d58",
  }),
}));

type DetailsProps = {
  item: Pokemon | null;
  onClick: () => void;
};

export default function DetailsPokemon({ item, onClick }: DetailsProps) {
  const handlerBack = () => onClick();
  const name = item.name.toUpperCase();
  const stats = item.stats.map((s) => {
    return (
      <div>
        <strong>{s.stat.name.toUpperCase()}:</strong> {s.base_stat}
      </div>
    );
  });

  const abilitiesText = item.abilities.map((a) => a.ability.name).join(", ");

  const movesText = item.moves.map((m) => m.move.name).join(", ");

  console.log(item);
  return (
    <ContainerAPI>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ textAlign: "center" }}
      >
        {name}
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
              <Item>
                <strong>Front Image</strong>
              </Item>
              <CardMedia
                component="img"
                sx={{
                  height: 140,
                  objectFit: "contain",
                }}
                image={item.sprites.front_default}
                title={name}
              />
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item>
              <strong>Stats</strong>
            </Item>
            <Item sx={{ textAlign: "left" }}>{stats}</Item>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <Card>
              <CardContent>
                <Item>
                  <strong>Description</strong>
                </Item>
                <Typography sx={{ color: "text.primary" }}>
                  <strong>Abilities</strong>
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {abilitiesText}
                </Typography>
                <Typography sx={{ color: "text.primary" }}>
                  <strong>Moves</strong>
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {movesText}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid size="auto">
                <Button size="small" variant="contained" onClick={handlerBack}>
                  Back
                </Button>
              </Grid>
              <Grid size="grow"></Grid>
              <Grid size="auto">
                <Button size="small" variant="contained">
                  See Evolutions
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </ContainerAPI>
  );
}
