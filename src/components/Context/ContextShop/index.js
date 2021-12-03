import React, { Component } from "react";
import cx from "classnames";
import style from "./ContextShop.module.css";
import Products from "../ContextProducts";
import { ThemeContest } from "../../../context";
import { THEME } from "../../../theme";
import WithThemeComponent from "../../HOCs";

const ContextShop = ({ value, setTheme }) => {
  const className = cx(style.shop, {
    [style.light]: value === THEME.LIGHT,
    [style.black]: value === THEME.BLACK,
  });
  return (
    <div className={className}>
      <Products />
    </div>
  );
};

const HeaderWithTheme = WithThemeComponent(ContextShop);

export default HeaderWithTheme;
