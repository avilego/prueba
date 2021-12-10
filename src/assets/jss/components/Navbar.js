import { grayColor, hexToRgb } from "../global";

const Navbar = (teme) => ({
  logo: {
    position: "relative",
    padding: "15px 15px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)",
    },
  },
  logoImage: {
    display: "inline-block",
    maxHeight: "33px",
    marginLeft: "10px",
    marginRight: "15px",
  },
  img: {
    width: "127px",
    height: "33px",
    border: "0",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  background: {
    background:
      "linear-gradient(225.52deg, #271A00 0.45%, rgba(0, 0, 0, 0.982162) 100.47%)",
  },
  wwu: {
    backgroundColor: "#FFAC12!important",
    borderRadius: "0px 18px 0px 0px!important",
    padding: "25px 35px!important",
  },
  text: {
    fontSize: "17px!important",
    height: "22px",
  },
});

export default Navbar;
