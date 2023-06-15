import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { theme } from "@/GlobalStyles";
import { ContentProps } from "./types";

const Content = ({ gameFamily }: ContentProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1",
      }}
    >
      <Typography mb={theme.spacing(2)}>
        Família de jogos: <strong>{gameFamily}</strong>
      </Typography>
    </Box>
  );
};

export default Content;
