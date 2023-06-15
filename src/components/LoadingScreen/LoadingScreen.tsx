import { theme } from "@/GlobalStyles";
import { Box, Container, LinearProgress } from "@mui/material";
import Image from "next/image";
import React from "react";
import { grey } from "@mui/material/colors";

const LoadingScreen = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundColor: grey[100],
      }}
    >
      <Image
        src="/assets/pokemon2.webp"
        alt="Logo do pokemon"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "50%", height: "auto", marginBottom: theme.spacing(8) }}
      />
      <Box
        sx={{
          width: "80%",
        }}
      >
        <LinearProgress />
      </Box>
    </Container>
  );
};

export default LoadingScreen;
