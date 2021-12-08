import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "../../assets/jss/components/Propertie";
import { makeStyles, styled } from "@mui/styles";
import House from "../../assets/img/House.png";
import Contact from "./Contact/Contact";
import Details from "./Details/Details";
import Similar from "./Similar/Similar";
import Footer from "./../Footer/Footer";
import axios from "axios";

const useStyles = makeStyles(styles);

function Propertie(props) {
  const classes = useStyles();
  const [propiedadesRent, setPropiedadesRent] = useState([]);
  const [propiedadesBuy, setPropiedadesBuy] = useState([]);
  const [tipo, guardarTipo] = useState("");
  const [info, setInfo] = useState("");

  const consultarApi = async () => {
    axios
      .get(`https://api.mocklets.com/p68140/rent/properties`)
      .then((response) => {
        setPropiedadesRent(response.data);
        console.log(propiedadesRent);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const consultarApi2 = async () => {
    axios
      .get(`https://api.mocklets.com/p68140/buy/properties`)
      .then((response) => {
        setPropiedadesBuy(response.data);
        console.log(propiedadesBuy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    consultarApi();
    consultarApi2();
  }, []);

  const formatterPeso = new Intl.NumberFormat("ES-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  });

  return (
    <Container className={classes.containerProp}>
      <Box className={classes.name}>
        <Typography variant="h3" color="white" textAlign="center">
          {info ? info.name : "FA1"}
        </Typography>
        <Typography variant="h3" color="white" textAlign="center">
          {info ? formatterPeso.format(info.cost) : "$5,000,000"}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          height: 400,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "60px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Box>
              <img
                className={classes.img}
                src={info ? info.src : House}
                alt={info.name}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Contact />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Box>
              <Details info={info} />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Similar
                propiedadesRent={propiedadesRent}
                propiedadesBuy={propiedadesBuy}
                tipo={tipo}
                guardarTipo={guardarTipo}
                setInfo={setInfo}
                info={info}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Propertie;
