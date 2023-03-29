import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";
import Pagination from "../components/Pagination";
import { SearhContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategotyId } from "../redux/slices/FilterSlice";
// console.log(setCategotyId);

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const { searchValue } = React.useContext(SearhContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const [currentPage, setCurrentPage] = React.useState(1);

  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  const pizzas = items.map((item, index) => (
    <PizzaBlock key={index} {...item} />
  ));
  const sceletons = [...new Array(items.length)].map((_, index) => (
    <Sceleton key={index} />
  ));

  const onChangeCategory = (id) => {
    dispatch(setCategotyId(id));
    console.log(id);
  };
  React.useEffect(() => {
    setIsloading(true);
    fetch(
      `https://64187f9875be53f451e10baa.mockapi.io/items?page=${currentPage}&limit=4&${search}&${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((json) => setItems(json));
    setIsloading(false);

    // window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagination onchangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
