import React from "react";
import style from "./Footer.module.css";
import cx from "classnames";
import { LanguageContext, ThemeContest } from "../../../context";
import { THEME } from "../../../theme";
import WithThemeComponent from "../../HOCs";

const ContextFooter = ({ value, setTheme, items}) => {
  const className = cx(style.footer, {
    [style.light]: value === THEME.LIGHT,
    [style.black]: value === THEME.BLACK,
  });
   const [lang, setlang] = items
  return (
    <div className={className}>
      <button
        onClick={() => {
          const currentLang = lang === "RU" ? "EN" : "RU";
          setlang(currentLang);
        }}>
        Switch Language
      </button>
    </div>
  );
};

const FooterWithTheme = WithThemeComponent(ContextFooter, LanguageContext.Consumer)

export default FooterWithTheme;
