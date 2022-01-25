import React from "react";
import Navbar from "./Navbar";
import ActiveResource from "./ActiveResource";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <ActiveResource />
      {props.children}
    </>
  );
};

export default Layout;
