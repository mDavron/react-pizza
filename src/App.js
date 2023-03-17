import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import "./App.css";
import "./scss/app.scss";
import PizzaBlog from "./components/PizzaBlog";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlog title="Мексиканская" price={350} />
            <PizzaBlog title="Голландская" price={500} />
            <PizzaBlog title="Чизбургер-пицца" price={450} />
            <PizzaBlog title="Мексиканская" price={380} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
