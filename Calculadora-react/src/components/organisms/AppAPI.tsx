import { useState, useEffect } from "react";
import ImgMediaCard from "../molecules/ImgMediaCard";
import SearchAppBar from "../molecules/SearchAppBar";
import CardsGrid from "./CardsGrid";

type ProductList = {
  id: string;
  title: string;
  price: string;
  image: string;
};

function AppAPI() {
  const [data, setData] = useState<ProductList[]>([]);
  const [option, setOption] = useState(0);

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

  const handlerClick = () => {
    setOption(1);
  };

  console.log(data);
  let list = data.map((item) => {
    return (
      <ImgMediaCard
        key={item.id}
        title={item.title}
        url={item.image}
        text={"Price: " + item.price + "$"}
        onClick={handlerClick}
      ></ImgMediaCard>
    );
  });

  return (
    <>
      <SearchAppBar />
      {option === 0 && <CardsGrid>{list}</CardsGrid>}
      {option === 1 && <CardsGrid>{list}</CardsGrid>}
    </>
  );
}

export default AppAPI;
