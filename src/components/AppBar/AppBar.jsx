import Navbar from "components/Navbar/Navbar";
import { navigationLabels as navMenu } from "data/navigationLabels";
import Logo from "components/Logo/Logo";
import styles from "./AppBar.module.css";
import cartIcom from "assets/shopping-cart-64.png";
import { useEffect } from "react";
import getCategories from "api/getCategories";

const AppBar = () => {
  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategories();
      const filteredParentsCategories = categories.filter(
        (item) => item.parent === 0
      );
      const submenu = filteredParentsCategories.map(
        ({ id, name, slug, parent, count }) => {
          return { id, name, url: slug, parent, count, submenu: [] };
        }
      );
      navMenu.map((item) => {
        return item.url.includes("store", 1)
          ? (item.submenu = [...submenu])
          : item;
      });
    };
    fetchData();
  }, []);

  return (
    <header className={styles.appBar}>
      <Logo />
      <Navbar navMenu={navMenu} />
      <div className={styles.cartButton}>
        <img className={styles.cartIcon} src={cartIcom} alt="cart Icon" />
      </div>
    </header>
  );
};

export default AppBar;
