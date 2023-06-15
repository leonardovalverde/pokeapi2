import EnhancedTable from "@/components/Table/Table";
import { useState, useEffect } from "react";
import { useGetPokemonListQuery } from "@/services/pokeapi/pokeapi";
import { PokemonsResponse } from "@/services/pokeapi/types";
import { headCells, initialValues, tableRow } from "./tableConfig";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Pokemons = () => {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState<
    {
      [x: string]: string | number;
    }[]
  >([initialValues]);
  const { data, isLoading, isSuccess, error, refetch } = useGetPokemonListQuery(
    { limit: 10, offset: page * 10 }
  );

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    refetch();
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
    refetch();
  };

  function createData(data: PokemonsResponse) {
    return data.results.map((pokemon) => {
      return tableRow(pokemon);
    });
  }

  useEffect(() => {
    if (data) {
      setRows(createData(data));
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {isSuccess && (
            <EnhancedTable
              tableHeadCells={headCells}
              tableTitle="Pokemons"
              rows={rows}
              count={data?.count}
              onNextPage={handleNextPage}
              onPreviousPage={handlePreviousPage}
              page={page}
            />
          )}
          {error && (
            <Typography color="error">
              Não foi possível carregar os dados
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default Pokemons;
