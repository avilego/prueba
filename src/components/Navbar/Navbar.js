import React from "react";
import Logo from "./../../assets/img/logo.png";

import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "../../assets/jss/components/Navbar";

const pages = ["Nav Link", "Nav Link", "Nav Link", "Nav Link"];

const useStyles = makeStyles(styles);

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  var brand = (
    <div className={classes.logo}>
      <a href="#" target="_blank">
        <div className={classes.logoImage}>
          <img src={Logo} alt="" className={classes.img} />
        </div>
      </a>
    </div>
  );

  return (
    <AppBar
      className={classes.background}
      position="static"
      color="primary"
      enableColorOnDark
    >
      <Container maxWidth="xl">
        <Toolbar className={classes.navbar}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
            }}
          >
            {brand}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "space-evenly",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <Button
              className={classes.wwu}
              sx={{ my: 2, color: "black", display: "inline-flex" }}
            >
              <Typography className={classes.text} textAlign="center">
                Work with us
              </Typography>
              <ArrowRightAltIcon sx={{ color: "white", my: "auto" }} />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
