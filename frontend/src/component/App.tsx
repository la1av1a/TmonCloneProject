import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "styled/global-style";
import { THEME_TYPE } from "styled/theme";
import CounterContainer from "./counter/CounterContainer";
import GithubProfileContainer from "./github/GithubProfileContainer";
import { setTheme, themeSelector } from "redux/theme";
import { darkTheme, lightTheme } from "styled/theme";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const App = (): JSX.Element => {
  const themType: THEME_TYPE = useSelector(themeSelector);
  const currentTheme = themType === THEME_TYPE.LIGHT ? lightTheme : darkTheme;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      setTheme(
        themType === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT
      )
    );
  };

  console.log("Rerender App");

  return (
    <>
      <GlobalStyle />
      <div>{themType}</div>
      <button onClick={onClick}>convert</button>
      <ThemeProvider theme={currentTheme}>
        <Routes>
          <Route path='/' element={<CounterContainer />} />
          <Route path='/github' element={<GithubProfileContainer />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
