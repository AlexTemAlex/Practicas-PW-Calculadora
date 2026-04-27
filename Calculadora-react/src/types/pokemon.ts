export type Results = {
  name: string;
  url: string;
};

export type PokemonList = {
  count: string;
  next: string | null;
  previus: string | null;
  results: Results[];
};

export type Pokemon = {
  id: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
