import { theme } from "@/GlobalStyles";
import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import DashboardHeader from "./components/Header/DashboardHeader";
import { modules } from "./constants";
import { useContext } from "react";
import {
  DashboardContext,
  DashboardContextProps,
} from "./context/DashboardContext";

const Dashboard = (): JSX.Element => {
  const { module } = useContext(DashboardContext) as DashboardContextProps;

  return (
    <Box sx={{ backgroundColor: grey[50], minHeight: "100vh" }}>
      <DashboardHeader />
      <Container sx={{ paddingTop: theme.spacing(4) }} maxWidth="xl">
        <>{modules[module]}</>
      </Container>
    </Box>
  );
};

export default Dashboard;
