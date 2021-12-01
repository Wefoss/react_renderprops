import React, { Component } from "react";
import cx from "classnames";
import style from "./header.module.css";
import { THEME } from "../../../theme";
import { ThemeContest, ProductsContext } from "../../../context";

class ContextHeader extends Component {
 
  render() {
    return (
      <ThemeContest.Consumer>
        {([value, setTheme]) => {
           
          const className = cx(style.header, {
            [style.light]: value === THEME.LIGHT,
            [style.black]: value === THEME.BLACK,
          });
          return (
            <ProductsContext.Consumer>
              {({ item1, item2, item3 }) => {
                return (
                  <header  className={className}>
                    <p>{item1}</p>
                    <p>{item2}</p>
                    <p>{item3}</p>
                    <button
                      onClick={() => {
                        const toggleTheme =
                          value === THEME.LIGHT ? THEME.BLACK : THEME.LIGHT;
                        setTheme(toggleTheme);
                      }}
                    >
                      Change Theme
                    </button>
                  </header>
                );
              }}
            </ProductsContext.Consumer>
          ); 
        }}
      </ThemeContest.Consumer>
    );
  }
}

export default ContextHeader;
