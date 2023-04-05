import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";
import Pagination from "../components/Pagination";
import { SearhContext } from "../App";

import { useSelector, useDispatch } from "react-redux";
import { setCategotyId, setCurrentPage } from "../redux/slices/FilterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);

  const { searchValue } = React.useContext(SearhContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  const order = sortType.includes("-") ? "asc" : "desc";
  const sortBy = sortType.replace("-", "");
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
  const onchangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    setIsloading(true);
    axios
      .get(
        `https://64187f9875be53f451e10baa.mockapi.io/items?page=${currentPage}&limit=4&${search}&${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => setItems(res.data));
    setIsloading(false);

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagination currentPage={currentPage} onchangePage={onchangePage} />
    </>
  );
};

export default Home;
