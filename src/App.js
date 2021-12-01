import "./App.css";
import React, { Component } from "react";
import Mouse from "./components/Mouse";
import ContextShop from "./components/Context/ContextShop";
import ContextHeader from "./components/Context/ContextHeader";
import { ThemeContest, ProductsContext } from "./context";
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
      lang: "RU",
    };
  }

  setLang = () => {
    const { lang } = this.state;
    this.setState({
      products: langENRu[lang],
      lang: lang === "RU" ? "EN" : "RU"
    });
  };

  cat = ({ x, y }) => {
    return (
      <div>
        <p style={{ position: "absolute", fontSize: "20px", left: x, top: y }}>
          cat
        </p>
      </div>
    );
  };
  dog = ({ x, y }) => {
    return (
      <div>
        <p style={{ position: "absolute", left: x + 30, top: y + 10 }}>dog</p>
      </div>
    );
  };

  setTheme = (val) => {
    this.setState({
      theme: val,
    });
  };

  render() {
    const { theme, products, lang } = this.state;
    console.log(lang);
    return (
      <ThemeContest.Provider value={[theme, this.setTheme]}>
        <ProductsContext.Provider value={products}>
          <div className="App">
            <ContextHeader />
            <ContextShop />
            <button onClick={this.setLang}>Switch Language</button>
            <Mouse>
              {(mouse) => {
                return (
                  <>
                    {this.dog(mouse)}
                    {this.cat(mouse)}
                  </>
                );
              }}
            </Mouse>
          </div>
        </ProductsContext.Provider>
      </ThemeContest.Provider>
    );
  }
}

export default App;
