import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

export const SearhContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="wrapper">
      <SearhContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearhContext.Provider>
    </div>
  );
}

export default App;
