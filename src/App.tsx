import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Route from "./routes";
import { Navbar } from "./components";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route />
    </BrowserRouter>
  );
};

export default App;
