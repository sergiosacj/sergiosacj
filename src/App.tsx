import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Route from "./routes";
import { Navbar, Footer } from "./components";

const App: React.FunctionComponent = () => {
  return (
    <div className="site">
      <div className="site-content">
        <BrowserRouter>
          <Navbar />
          <Route />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
