import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <button className={classes.button}>Home</button>
    </div>
  );
};
export default Header;
