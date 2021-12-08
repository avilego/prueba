import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import styles from "../../assets/jss/components/Footer";

const useStyles = makeStyles(styles);

function Footer() {
  const classes = useStyles();

  return (
    <Container className={classes.containerProp}>
      <Box
        sx={{
          display: "inline-block",
          width: "100%",
          height: 400,
          marginTop: "60px",
        }}
        className={classes.footer}
      ></Box>
    </Container>
  );
}

export default Footer;
