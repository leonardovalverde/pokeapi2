import { theme } from "@/GlobalStyles";
import { Box } from "@mui/material";
import Image from "next/image";

const Banner = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#fff",
        width: "100%",
        padding: `${theme.spacing(2)} ${theme.spacing(0)} ${theme.spacing(
          2
        )} ${theme.spacing(2)}`,
        "@media (max-width: 1280px)": {
          padding: `${theme.spacing(2)}`,
          justifyContent: "center",
          marginBottom: `${theme.spacing(4)}`,
        },
        "@media (max-width: 450px)": {
          width: "80%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: `calc(50vw - ${theme.spacing(2)})`,
          height: `calc(100vh - ${theme.spacing(4)})`,
          backgroundColor: "primary.dark",
          borderRadius: "1rem",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 1280px)": {
            width: "90%",
            height: "auto",
            padding: `${theme.spacing(2)}`,
          },
        }}
        boxShadow={4}
      >
        <Image
          src="/assets/pokemon1.png"
          alt="Os pokemons da primeira geração correndo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Banner;
