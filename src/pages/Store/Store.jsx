import ShoppingCategoriesList from "components/common/ShoppingCategoriesList/ShoppingCategoriesList";
import { Outlet } from "react-router-dom";

const Store = () => {
  return (
    <>
      <h3>STORE</h3>
      <ShoppingCategoriesList />
      <Outlet />
    </>
  );
};

export default Store;
