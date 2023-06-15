import Games from "./screens/games/Games";
import Pokemons from "./screens/pokemons/Pokemons";
type Modules = Record<string, JSX.Element>;

const modules: Modules = {
  pokemons: <Pokemons />,
  games: <Games />,
};

export { modules };
