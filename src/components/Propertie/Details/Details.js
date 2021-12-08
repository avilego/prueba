import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { makeStyles } from "@mui/styles";
import styles from "../../../assets/jss/components/Details";

const useStyles = makeStyles(styles);

function Details({ info }) {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      className={classes.details}
      sx={{ minWidth: 275, padding: "0", margin: "0" }}
    >
      <CardContent sx={{ padding: "0!important", margin: "0" }}>
        <Box className={classes.text}>
          <Typography sx={{ fontSize: 20, lineHeight: "23px", color: "black" }}>
            Details
          </Typography>
        </Box>
        <Box className={classes.icons}>
          <Box className={classes.icon}>
            <BedIcon sx={{ color: "black" }} />
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: 400,
                lineHeight: "22px",
                color: "black",
              }}
            >
              {info.bedrooms}
            </Typography>
          </Box>
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
              {info.bathroom}
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
              {info.mts}
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
              {info.slots}
            </Typography>
          </Box>
          <Box className={classes.icon}>
            <DateRangeIcon sx={{ color: "black" }} />
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: 400,
                lineHeight: "22px",
                color: "black",
              }}
            >
              {info.year}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Details;
