// import { shoppingCategories } from "data/shoppingCategories";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CategoryItem from "components/Categories/CategoryItem/CategoryItem";

const getCategories = async () => {
  const response = await axios.get(
    "https://dropsite.odessey.od.ua/wp-json/wc/store/v1/products/categories/",
    { params: { hide_empty: false } }
  );

  return response?.data;
};

const ShoppingCategoriesList = () => {
  const [shoppingCategories, setshoppingCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategories();
      setshoppingCategories(categories);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {shoppingCategories.map((item) => (
        <li key={item.id}>
          {/* <NavLink to={`store/${item.slug}`}> */}
            <CategoryItem categorylabel={item.name} />
          {/* </NavLink> */}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingCategoriesList;
