import { useState, useEffect } from "react";
import ImgMediaCard from "../molecules/ImgMediaCard";
import SearchAppBar from "../molecules/SearchAppBar";
import CardsGrid from "./CardsGrid";
import Details from "./Details";
import type { Product } from "../types/product";

function AppAPI() {
  const [data, setData] = useState<Product[]>([]);
  const [option, setOption] = useState(0);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log("Error: " + error);
      }
    };

    fetchData();
  }, []);

  const handlerOption = (option: number) => {
    setOption(option);
  };

  const handleCardClick = (item: Product) => {
    setSelectedItem(item);
    handlerOption(1);
  };

  let list = data.map((item) => {
    return (
      <ImgMediaCard
        key={item.id}
        title={item.title}
        url={item.image}
        text={"Price: " + item.price + "$"}
        onClick={() => handleCardClick(item)}
      ></ImgMediaCard>
    );
  });

  return (
    <>
      <SearchAppBar title="E-commerce API" />
      {option === 0 && <CardsGrid>{list}</CardsGrid>}
      {option === 1 && (
        <Details item={selectedItem} onClick={() => handlerOption(0)}></Details>
      )}
    </>
  );
}

export default AppAPI;
