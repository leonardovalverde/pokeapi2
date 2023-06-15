import { TableHeadCell } from "@/components/Table/components/EnhancedTableHead/types";
import { Pokemon } from "@/services/pokeapi/types";
import { getId } from "../../functions";

const headCells: TableHeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Nome",
    isSortable: true,
  },
  {
    id: "picture",
    numeric: false,
    disablePadding: false,
    label: "Foto",
    isSortable: false,
  },
  {
    id: "backPicture",
    numeric: false,
    disablePadding: false,
    label: "Foto de costas",
    isSortable: false,
  },
  {
    id: "shinyPicture",
    numeric: false,
    disablePadding: false,
    label: "Foto shiny",
    isSortable: false,
  },
];

const initialValues = {
  name: "",
  picture: "",
  backPicture: "",
  shinyPicture: "",
};

const tableRow = (pokemon: Pokemon) => {
  return {
    name: pokemon.name,
    picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(
      pokemon.url
    )}.png`,
    backPicture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${getId(
      pokemon.url
    )}.png`,
    shinyPicture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${getId(
      pokemon.url
    )}.png`,
  };
};

export { headCells, initialValues, tableRow };
