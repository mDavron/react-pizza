import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const [categotyId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sortProperty.replace("-", "");
  const category = categotyId > 0 ? `category=${categotyId}` : "";

  React.useEffect(() => {
    setIsloading(true);
    fetch(
      `https://64187f9875be53f451e10baa.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((json) => setItems(json));
    setTimeout(() => {
      setIsloading(false);
    }, 500);
    window.scrollTo(0, 0);
  }, [categotyId, sortType]);
  return (
    <>
      <div className="content__top">
        <Categories
          value={categotyId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(items.length)].map((_, index) => (
              <Sceleton key={index} />
            ))
          : items.map((item, index) => {
              return <PizzaBlock key={index} {...item} />;
            })}
      </div>
    </>
  );
};

export default Home;
