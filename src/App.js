import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import "./scss/app.scss";
import PizzaBlog from "./components/PizzaBlog";
// pizza json
import pizzas from "./assets/pizzas.json";
console.log(pizzas);
function App() {
  const [items, setItems] = React.useState([]);
  // https://64187f9875be53f451e10baa.mockapi.io/items
  React.useEffect(() => {
    fetch("https://64187f9875be53f451e10baa.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
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
            {items.map((obj, i) => {
              return <PizzaBlog key={i} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
