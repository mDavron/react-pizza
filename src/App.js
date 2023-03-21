import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import "./scss/app.scss";
import PizzaBlock from "./components/PizzaBlock";
import Sceleton from "./components/PizzaBlock/Sceleton";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  // https://64187f9875be53f451e10baa.mockapi.io/items
  React.useEffect(() => {
    fetch("https://64187f9875be53f451e10baa.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
    setIsloading(false);
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(8)].map((_, index) => <Sceleton key={index} />)
              : items.map((item, index) => {
                  return <PizzaBlock key={index} {...item} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
