import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { makeStyles } from "@mui/styles";
import { CardActionArea } from "@mui/material";
import styles from "../../../assets/jss/components/Similar";

const useStyles = makeStyles(styles);

function Result({ setInfo, resultadoBusqueda }) {
  const classes = useStyles();

  return (
    <Box className={classes.cardContainer}>
      <Box className={classes.texto}>
        <Typography className={classes.text}>Resultado</Typography>
      </Box>
      {resultadoBusqueda.map((propiedad) => (
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
              key={propiedad.name}
              image={propiedad.src}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                key={propiedad.name}
                gutterBottom
                variant="h3"
                component="div"
              >
                {propiedad.name}
              </Typography>
              <Box className={classes.icons}>
                <Box className={classes.icon}>
                  <BathtubIcon sx={{ color: "black" }} />
                  <Typography
                    key={propiedad.name}
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
                    key={propiedad.name}
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
                    key={propiedad.name}
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
  );
}

export default Result;
