import React from "react";
import Navbar from "./../components/Navbar/Navbar";
import Propertie from "./../components/Propertie/Propertie";
import Footer from "./../components/Footer/Footer";
import "./../index.css";

function properties() {
  return (
    <div>
      <Navbar />
      <Propertie />
      <Footer />
    </div>
  );
}

export default properties;
