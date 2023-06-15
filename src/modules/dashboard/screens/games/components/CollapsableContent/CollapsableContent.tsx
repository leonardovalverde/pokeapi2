import { theme } from "@/GlobalStyles";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { CollapsabledContentProps } from "./types";

const CollapsableContent = ({ names }: CollapsabledContentProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {names && (
        <>
          {names[0]?.name && (
            <>
              <Typography mb={theme.spacing(2)}>Nome em Japonês:</Typography>
              <strong>{names[0].name}</strong>
            </>
          )}
          {names[1]?.name && (
            <>
              <Typography mb={theme.spacing(2)}>Nome em Koreano:</Typography>
              <strong>{names[1].name}</strong>
            </>
          )}
          {names[2]?.name && (
            <>
              <Typography mb={theme.spacing(2)}>Nome em Chinês:</Typography>
              <strong>{names[2].name}</strong>
            </>
          )}
          {names[5]?.name && (
            <>
              <Typography mb={theme.spacing(2)}>Nome em Espanhol:</Typography>

              <strong>{names[5].name}</strong>
            </>
          )}
          {names[6]?.name && (
            <>
              <Typography mb={theme.spacing(2)}>Nome em Italiano:</Typography>
              <strong>{names[6].name}</strong>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default CollapsableContent;
