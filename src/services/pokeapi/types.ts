export interface PaginationParams {
  limit: number;
  offset: number;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokeApiGenericResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface GameResponse {
  id: number;
  name: string;
  names: {
    name: string;
  }[];
  version_group: {
    name: string;
  };
}

export interface GameParams {
  id: number;
}
