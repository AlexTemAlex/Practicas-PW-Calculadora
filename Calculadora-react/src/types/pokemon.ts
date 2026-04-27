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

export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type Move = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    order: number | null;
    version_group: {
      name: string;
      url: string;
    };
  }[];
};

export type SpriteOther = {
  dream_world: {
    front_default: string | null;
  };
  home: {
    front_default: string | null;
    front_shiny: string | null;
  };
  "official-artwork": {
    front_default: string;
    front_shiny: string;
  };
};

export type Sprites = {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  other: SpriteOther;
};

export type Pokemon = {
  id: number;
  name: string;
  order: number;
  base_experience: number;
  height: number;
  weight: number;

  abilities: Ability[];
  types: Type[];
  stats: Stat[];
  moves: Move[];

  sprites: Sprites;

  species: {
    name: string;
    url: string;
  };
};
