import { Box } from "@mui/system";
import Grid from "@mui/system/Grid";
import styled from "@mui/system/styled";
import ContainerAPI from "../atoms/ContainerAPI";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Pokemon } from "../../types/pokemon";
import StandardImageList from "../molecules/StandardImageList";
import { useEffect, useState } from "react";

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

type ListEvolutionsProps = {
  url: string;
  onClick: () => void;
  listImages: string[];
};

export default function ListEvolutions({
  url,
  onClick,
  listImages,
}: ListEvolutionsProps) {
  const [chain, setChain] = useState<any>(null);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        const resSpecies = await fetch(url);
        const species = await resSpecies.json();

        const evoUrl = species.evolution_chain.url;

        const resEvo = await fetch(evoUrl);
        const evoData = await resEvo.json();

        setChain(evoData.chain);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEvolutionChain();
  }, [url]);

  const handlerBack = () => onClick();

  return (
    <ContainerAPI>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Card>
            <CardContent>
              <Item>
                <strong>Evolutions</strong>
              </Item>

              <div>
                {chain ? JSON.stringify(chain.species.name) : "Loading..."}
              </div>
              <Grid size={{ xs: 12, md: 12 }}>
                <Card>
                  <CardContent>
                    <Item>
                      <strong>Gallery</strong>
                    </Item>
                    <StandardImageList images={listImages}></StandardImageList>
                  </CardContent>
                </Card>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Button size="small" variant="contained" onClick={handlerBack}>
          Back
        </Button>
      </Grid>
    </ContainerAPI>
  );
}
