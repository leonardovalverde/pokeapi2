import { useState, useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import {
  useGetAllGamesQuery,
  useGetGameListQuery,
} from "@/services/pokeapi/pokeapi";
import CollapsableCard from "@/components/CollapsableCard/CollapsableCard";
import Content from "./components/Content/Content";
import CollapsableContent from "./components/CollapsableContent/CollapsableContent";
import { theme } from "@/GlobalStyles";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createArrayFromObject } from "@/utils/objects";
import MenuItem from "@mui/material/MenuItem";

const GAMES_LENGTH = 43;

const Games = () => {
  const [gameId, setGameId] = useState(1);
  const { data, isLoading, isSuccess, error, refetch } = useGetGameListQuery({
    id: gameId,
  });

  console.log("teste");

  const {
    data: allGamesData,
    isSuccess: allGamesIsSucess,
    error: allGamesIsError,
  } = useGetAllGamesQuery();

  const handlePrevious = () => {
    if (gameId === 1) return;
    setGameId((prev) => prev - 1);
    refetch();
  };

  const handleNext = () => {
    if (gameId === GAMES_LENGTH) return;
    setGameId((prev) => prev + 1);
    refetch();
  };

  const handleSelect = (event: SelectChangeEvent) => {
    setGameId(parseInt(event.target.value) + 1);
  };

  const selectData = useMemo(() => {
    if (allGamesData) {
      return createArrayFromObject(allGamesData!.results, "name");
    } else {
      return [];
    }
  }, [allGamesData]);

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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
              }}
            >
              <Typography
                variant="h6"
                sx={{ textAlign: "center" }}
                mb={theme.spacing(3)}
              >
                Navegue pelos games ou selecione um para mais informações.
              </Typography>
              {selectData.length > 0 && allGamesIsSucess && (
                <Select
                  value={(gameId - 1).toString()}
                  sx={{
                    marginBottom: theme.spacing(3),
                  }}
                  onChange={handleSelect}
                >
                  {selectData.map((item, index) => (
                    <MenuItem key={item} value={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              )}
              {allGamesIsError && (
                <Typography color="error" mb={theme.spacing(3)}>
                  Não foi possível carregar o seletor de versões
                </Typography>
              )}
              <Box sx={{ width: "345px" }}>
                <CollapsableCard
                  title={`Pokemon - ${data.name}`}
                  content={<Content gameFamily={data.version_group.name} />}
                  collapsableContent={<CollapsableContent names={data.names} />}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "345px",
                  justifyContent: "space-between",
                  marginTop: theme.spacing(4),
                }}
              >
                <Button
                  onClick={handlePrevious}
                  disabled={gameId === 1 || isLoading}
                >
                  anterior
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={gameId === GAMES_LENGTH || isLoading}
                >
                  Próximo
                </Button>
              </Box>
            </Box>
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

export default Games;
