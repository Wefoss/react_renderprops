import React from "react";
import cx from "classnames";
import style from "./header.module.css";
import { THEME } from "../../../theme";
import { ThemeContest, ProductsContext } from "../../../context";
import WithThemeComponent from "../../HOCs";

const ContextHeader = ({ value, setTheme, items }) => {
  const className = cx(style.header, {
    [style.light]: value === THEME.LIGHT,
    [style.black]: value === THEME.BLACK,
  });
  
  return (
    <header className={className}>
      <p>{items.item1}</p>
      <p>{items.item2}</p>
      <p>{items.item3}</p>
      <button
        onClick={() => {
          const toggleTheme = value === THEME.LIGHT ? THEME.BLACK : THEME.LIGHT;
          setTheme(toggleTheme);
        }}
      >
        Change Theme
      </button>
    </header>
  );
};

const HeaderWithTheme = WithThemeComponent(ContextHeader, ProductsContext.Consumer);

export default HeaderWithTheme;
