import "./App.css";
import React, { Component } from "react";
import Mouse from "./components/Mouse";
import ContextShop from "./components/Context/ContextShop";
import HeaderWithTheme from "./components/Context/ContextHeader";
import FooterWithTheme from "./components/Context/ContextFooter";
import { ThemeContest, ProductsContext, LanguageContext } from "./context";

import { THEME } from "./theme";

const langENRu = {
  RU: {
    item1: "холодильник",
    item2: "кофе-машина",
    item3: "блендер",
  },
  EN: {
    item1: "fridge",
    item2: "coffeeMachine",
    item3: "blender",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEME.LIGHT,
      products: {
        item1: "fridge",
        item2: "coffeeMachine",
        item3: "blender",
      },
      lang: "EN",
    };
  }

  setLang = (str) => {
    this.setState({
      products: langENRu[str],
      lang: str,
    });
  };

  setTheme = (val) => {
    this.setState({
      theme: val,
    });
  };

  render() {
    const { theme, products, lang } = this.state;
    console.log(lang);  return (
      <ThemeContest.Provider value={[theme, this.setTheme]}>
        <ProductsContext.Provider value={products}>
          <div className="App">
            <HeaderWithTheme />
            <ContextShop></ContextShop>

            <LanguageContext.Provider value={[lang, this.setLang]}>
              <FooterWithTheme />
            </LanguageContext.Provider>
          </div>
        </ProductsContext.Provider>
      </ThemeContest.Provider>
    );
  }
}

export default App;
