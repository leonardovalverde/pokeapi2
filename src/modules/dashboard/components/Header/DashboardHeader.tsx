import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import { MenuItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UserState, setUser } from "@/store/slice/userSlice";
import {
  DashboardContext,
  DashboardContextProps,
} from "../../context/DashboardContext";
import { useContext } from "react";
import { useRouter } from "next/router";

const DashboardHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { setModule } = useContext(DashboardContext) as DashboardContextProps;
  const userData = useSelector((state: UserState) => state.user);
  const open = Boolean(anchorEl);

  const handleLogout = () => {
    dispatch(setUser({} as UserState));
    window.localStorage.removeItem("token");
    router.push("/login");
  };

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
            <Box>
              <Typography
                sx={{
                  "@media (max-width: 620px)": {
                    display: "none",
                  },
                }}
              >
                Bem-vindo {userData.name}.
              </Typography>
            </Box>
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
            <Button sx={{ color: "#fff" }} onClick={handleLogout}>
              sair
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DashboardHeader;
