import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { CardActionArea } from "@mui/material";
import styles from "../../../assets/jss/components/Similar";
import House from "../../../assets/img/House.png";

const useStyles = makeStyles(styles);

function Similar({
  tipo,
  guardarTipo,
  propiedadesRent,
  propiedadesBuy,
  setInfo,
  info,
}) {
  console.log(tipo);
  const classes = useStyles();
  const [busqueda, setBusqueda] = useState("");
  const [resultadoBuy, setResultadoBuy] = useState([]);

  console.log(busqueda);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarBuy(e.target.value, tipo);
  };

  const filtrarBuy = (terminoBusqueda, tipo) => {
    var resultadosBusqueda = propiedadesBuy.filter((elemento) => {
      if (
        elemento[tipo]
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        console.log(elemento);
        return elemento;
      }
    });
    setResultadoBuy(resultadosBusqueda);
    console.log(resultadosBusqueda);
  };

  return (
    <Container className={classes.containerSim}>
      <Box className={classes.head}>
        <Box>
          <Typography className={classes.text}>Similar Listing</Typography>
        </Box>
        <Box className={classes.search}>
          <TextField
            onChange={handleChange}
            id="search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchOutlinedIcon />
                </IconButton>
              ),
            }}
          />
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="tipo">Tipo</InputLabel>
            <Select
              labelId="tipo"
              id="tipo"
              value={tipo}
              onChange={(e) => guardarTipo(e.target.value)}
              autoWidth
              label="Tipo"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value="bathroom">bathroom</MenuItem>
              <MenuItem value="bedrooms">bedrooms</MenuItem>
              <MenuItem value="cost">cost</MenuItem>
              <MenuItem value="mts">mts</MenuItem>
              <MenuItem value="name">name</MenuItem>
              <MenuItem value="slot">slot</MenuItem>
              <MenuItem value="year">year</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box className={classes.cardContainer}>
        {resultadoBuy.map((propiedad) => (
          <Card
            onClick={() => {
              setInfo(propiedad);
            }}
            className={classes.card}
            xs={2}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="336"
                image={propiedad.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {propiedad.name}
                </Typography>
                <Box className={classes.icons}>
                  <Box className={classes.icon}>
                    <BathtubIcon sx={{ color: "black" }} />
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "black",
                      }}
                    >
                      {propiedad.bathroom}
                    </Typography>
                  </Box>
                  <Box className={classes.icon}>
                    <SquareFootIcon sx={{ color: "black" }} />
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "black",
                      }}
                    >
                      {propiedad.mts}
                    </Typography>
                  </Box>
                  <Box className={classes.icon}>
                    <HouseSidingIcon sx={{ color: "black" }} />
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "black",
                      }}
                    >
                      {propiedad.slot}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box className={classes.cardContainer}>
        {propiedadesRent.map((propiedad) => (
          <Card
            sx={{ minWidth: "33%" }}
            onClick={() => {
              setInfo(propiedad);
            }}
            className={classes.card}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="336"
                image={propiedad.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {propiedad.name}
                </Typography>
                <Box className={classes.icons}>
                  <Box className={classes.icon}>
                    <BathtubIcon sx={{ color: "black" }} />
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "black",
                      }}
                    >
                      {propiedad.bathroom}
                    </Typography>
                  </Box>
                  <Box className={classes.icon}>
                    <SquareFootIcon sx={{ color: "black" }} />
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "black",
                      }}
                    >
                      {propiedad.mts}
                    </Typography>
                  </Box>
                  <Box className={classes.icon}>
                    <HouseSidingIcon sx={{ color: "black" }} />
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "black",
                      }}
                    >
                      {propiedad.slot}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Similar;
