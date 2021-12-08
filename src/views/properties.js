import React from "react";
import Container from "@mui/material/Container";
import Navbar from "./../components/Navbar/Navbar";
import Propertie from "./../components/Propertie/Propertie";
import Footer from "./../components/Footer/Footer";
import "./../index.css";

function properties() {
  return (
    <div>
      <Navbar />
      <Propertie />
      {/* <Container
        sx={{
          display: "inline-block!important",
        }}
      >
        <Footer />
      </Container> */}
    </div>
  );
}

export default properties;
