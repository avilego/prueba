import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { makeStyles } from "@mui/styles";
import styles from "../../../assets/jss/components/Contact";

const useStyles = makeStyles(styles);

function Contact() {
  const classes = useStyles();

  return (
    <Card className={classes.cardContact}>
      <CardContent sx={{ padding: "0" }}>
        <Box className={classes.containerName}>
          <Avatar
            sx={{ width: 34, height: 34 }}
            className={classes.avatar}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Box className={classes.name}>
            <Typography
              sx={{ fontSize: 15, fontWeight: 400 }}
              color="text.secondary"
            >
              Kayley Hall
            </Typography>
            <Typography
              sx={{ color: "#FFAC12", fontSize: 13, fontWeight: 700 }}
              color="text.secondary"
            >
              View Profile
            </Typography>
          </Box>
        </Box>
        <Box className={classes.form}>
          <TextField
            className={classes.textField}
            fullWidth
            label="Name"
            id="name"
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Phone"
            id="phone"
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Email"
            id="email"
          />
          <TextField
            className={classes.textField}
            id="outlined-multiline-static"
            label="Hello, I am interested in..."
            fullWidth
            multiline
            rows={2}
          />
        </Box>
        <Button
          className={classes.wwu}
          sx={{ my: 2, color: "white", display: "inline-flex" }}
        >
          <Typography className={classes.text} textAlign="center">
            Learn more
          </Typography>
          <ArrowRightAltIcon
            sx={{ color: "#FFAC12", my: "auto", marginLeft: "10px" }}
          />
        </Button>
      </CardContent>
    </Card>
  );
}

export default Contact;
