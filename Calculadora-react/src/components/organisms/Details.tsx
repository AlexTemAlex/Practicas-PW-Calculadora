import { Box } from "@mui/system";
import Grid from "@mui/system/Grid";
import styled from "@mui/system/styled";
import ContainerAPI from "../atoms/ContainerAPI";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Product } from "../../types/product";

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
  item: Product | null;
  onClick: () => void;
};

export default function Details({ item, onClick }: DetailsProps) {
  const handlerBack = () => onClick();

  return (
    <ContainerAPI>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ textAlign: "center" }}
      >
        {item.title}
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                sx={{
                  height: 140,
                  objectFit: "contain",
                }}
                image={item.image}
                title={item.title}
              />
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item sx={{ p: 2 }}>
              <div>
                <strong>Id:</strong> {item.id}
              </div>

              <div style={{ fontSize: 18 }}>
                <strong>Price:</strong> ${item.price}
              </div>

              <div>
                <strong>Category:</strong> {item.category}
              </div>

              <div>
                <strong>Rating Rate:</strong> ⭐ {item.rating.rate}
              </div>

              <div>
                <strong>Rating Count:</strong> {item.rating.count}
              </div>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <Card>
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
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
                  More Details
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </ContainerAPI>
  );
}
