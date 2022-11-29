import React from "react";
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <header className="header" style={{ paddingTop: "4rem" }}>
      <img
        src={logo}
        alt="logo"
        style={{
          width: "250px",
          height: "80px",
          objectFit: "cover",
          marginLeft: "100px",
        }}
      />
    </header>
  );
};
export default Header;
