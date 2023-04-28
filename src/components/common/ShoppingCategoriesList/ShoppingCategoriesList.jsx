// import { shoppingCategories } from "data/shoppingCategories";
// import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryItem from "components/Categories/CategoryItem/CategoryItem";
import getCategories from "api/getCategories";

const ShoppingCategoriesList = () => {
  const [shoppingCategories, setshoppingCategories] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const categories = await getCategories();
  //     setshoppingCategories(categories);
  //     const subMenuArray = categories.map(item => item.parent === 0 ? item : )
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategories();
      setshoppingCategories(categories);
      const subMenuArray = categories.filter((item) => item.parent === 0);
      const subMenuArray1 = subMenuArray.map(
        ({ id, name, slug, parent, count }) => {
          return { id, name, slug, parent, count, submenu: [] };
        }
      );
      console.log(subMenuArray1);
      subMenuArray.map((item) => {
        if (item.route.includes("store", 1)) {
          item.subMenu = [...subMenuArray1];
          return item;
        } else return item;
      });
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
