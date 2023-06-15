import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { UserState } from "@/store/slice/userSlice";
import {
  DashboardContext,
  DashboardContextProps,
} from "../../context/DashboardContext";
import { useContext } from "react";

const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { setModule } = useContext(DashboardContext) as DashboardContextProps;
  const userData = useSelector((state: UserState) => state.user);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModule = (module: string) => {
    setModule(module);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "300px", display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleModule("pokemons")}>
                Pokemons
              </MenuItem>
              <MenuItem onClick={() => handleModule("games")}>Jogos</MenuItem>
            </Menu>
            <div>
              <span>Bem-vindo {userData.name}.</span>
            </div>
          </Box>
          <Box>
            <Image
              src="/assets/pokemon2.webp"
              alt="Logo do pokemon"
              width={0}
              height={0}
              sizes="100%"
              style={{
                width: "130px",
                height: "auto",
              }}
            />
          </Box>
          <Box
            sx={{ display: "flex", width: "300px", justifyContent: "flex-end" }}
          >
            sair
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DashboardHeader;
