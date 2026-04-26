import { useState, useEffect } from "react";
import ActionAreaCard from "../molecules/ActionAreaCard";
import SearchAppBar from "../molecules/SearchAppBar";

type PokemonList = {
  name: string;
  url: string;
};

type PokemonDetails = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

function AppAPI() {
  const [data, setData] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const json = await res.json();

        const details = await Promise.all(
          json.results.map(async (pokemon: PokemonList) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          }),
        );

        setData(details);
      } catch (error) {
        console.log("Error: " + error);
      }
    };

    fetchData();
  }, []);

  let list = data.map((item) => {
    return (
      <ActionAreaCard
        key={item.id}
        text={item.name}
        url={item.sprites.front_default}
      ></ActionAreaCard>
    );
  });

  return (
    <>
      <SearchAppBar />
      {list}
    </>
  );
}

export default AppAPI;
