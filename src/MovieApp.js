import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ErrorPage from "./routes/Error";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/"} errorElement={<ErrorPage />} />
          <Route path={"/movie/:id"} element={<Detail />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
