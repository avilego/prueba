import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { CardActionArea } from "@mui/material";
import styles from "../../../assets/jss/components/Similar";
import Result from "../Result/Result";

const useStyles = makeStyles(styles);

function Similar({
  tipo,
  guardarTipo,
  propiedadesRent,
  propiedadesBuy,
  setInfo,
  info,
}) {
  const propiedades = [...propiedadesRent, ...propiedadesBuy];
  const classes = useStyles();
  const [busqueda, setBusqueda] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const [resultado, setResultado] = useState(false);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarBuy(e.target.value, tipo);
    if (e.target.value === "") {
      setResultado(false);
    } else {
      setResultado(true);
    }
  };

  const filtrarBuy = (terminoBusqueda, tipo) => {
    var resultadosBusqueda = propiedades.filter((elemento) => {
      if (
        elemento[tipo]
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setResultadoBusqueda(resultadosBusqueda);
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
      {resultado ? (
        <Result setInfo={setInfo} resultadoBusqueda={resultadoBusqueda} />
      ) : null}
      <Box className={classes.cardContainer}>
        {propiedades.map((propiedad) => (
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
