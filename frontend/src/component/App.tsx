import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/Home";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<HomePages />} />
    </Routes>
  );
};

export default App;
