import { useState, useEffect } from "react";
import ImgMediaCard from "../molecules/ImgMediaCard";
import SearchAppBar from "../molecules/SearchAppBar";
import CardsGrid from "./CardsGrid";
import DetailsPokemon from "./DetailsPokemon";
import type { PokemonList, Pokemon, Type } from "../../types/pokemon";

function AppAPI() {
  const [pokemonList, setPokemonList] = useState<PokemonList>();
  const [pokemonDetails, setPokemonDetails] = useState<any[]>([]);
  const [option, setOption] = useState(0);
  const [selectedItem, setSelectedItem] = useState<Pokemon | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20&offset=600",
        );
        const json = await res.json();

        setPokemonList(json);
      } catch (error) {
        console.log("Error: " + error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!pokemonList?.results) return;

    const fetchDetails = async () => {
      try {
        const details = await Promise.all(
          pokemonList.results.map(async (item) => {
            const res = await fetch(item.url);
            return await res.json();
          }),
        );

        setPokemonDetails(details);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [pokemonList]);

  const handlerOption = (option: number) => {
    setOption(option);
  };

  const handleCardClick = (item: Pokemon) => {
    setSelectedItem(item);
    handlerOption(1);
  };

  const filteredData = pokemonDetails?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  let list = filteredData?.map((item) => {
    let textPokemon =
      "Type: " + item.types.map((t: Type) => t.type.name).join(" + ");
    return (
      <ImgMediaCard
        key={item.id}
        title={item.name.toUpperCase()}
        url={item.sprites.front_default}
        text={textPokemon}
        onClick={() => handleCardClick(item)}
      ></ImgMediaCard>
    );
  });

  return (
    <>
      <SearchAppBar title="Pokemon API" onSearch={setSearch} />
      {option === 0 && <CardsGrid>{list}</CardsGrid>}
      {option === 1 && selectedItem && (
        <DetailsPokemon
          item={selectedItem}
          onClick={() => handlerOption(0)}
        ></DetailsPokemon>
      )}
    </>
  );
}

export default AppAPI;
