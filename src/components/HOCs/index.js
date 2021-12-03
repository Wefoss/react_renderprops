import { ProductsContext, ThemeContest, LanguageContext } from "../../context";

const WithThemeComponent = (SelectedComponent, SecondContext) => {
  const IfSecondProvider = ({ value, setTheme }) => {
    return (
        SecondContext !== undefined ?  <SecondContext>
        {(items) => (
          <SelectedComponent value={value} setTheme={setTheme} items={items} />
        )}
      </SecondContext> : <SelectedComponent value={value} setTheme={setTheme} />
    );
  };

  return (props) => {
    return (
      <ThemeContest.Consumer>
        {([value, setTheme]) => <IfSecondProvider value={value} setTheme={setTheme} />}
      </ThemeContest.Consumer>
    );
  };
};

export default WithThemeComponent;
