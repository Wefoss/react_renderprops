import React, { Component } from "react";
import cx from "classnames";
import style from "./ContextShop.module.css";
import Products from "../ContextProducts";
import { ThemeContest } from "../../../context";
import { THEME } from "../../../theme";

class ContextShop extends Component {
  render() {
    return (
      <ThemeContest.Consumer>
        {([value, setTheme]) => {
          const className = cx(style.shop, {
            [style.light]: value === THEME.LIGHT,
            [style.black]: value === THEME.BLACK,
          });
          return (
            <div className={className}>
              <Products />
            </div>
          );
        }}
      </ThemeContest.Consumer>
    );
  }
}

export default ContextShop;
