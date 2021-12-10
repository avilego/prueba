import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
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
          height: "auto",
          marginTop: "30px",
        }}
        className={classes.footer}
      >
        <Box className={classes.name}>
          <Typography variant="h3" color="white" textAlign="center">
            Make your dreams a reality
          </Typography>
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
      </Box>
    </Container>
  );
}

export default Footer;
