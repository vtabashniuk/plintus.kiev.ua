import Navbar from "components/Navbar/Navbar";
import { navigationLabels } from "data/navigationLabels";
import Logo from "components/Logo/Logo";
import styles from './AppBar.module.css';
import cartIcom from "assets/shopping-cart-64.png";

const AppBar = () => {
  return (
    <header className={styles.appBar}>
      <Logo />
      <Navbar navigationLabels={navigationLabels} />
      <div className={styles.cartButton}><img className={styles.cartIcon} src={cartIcom} alt="cart Icon"/></div>
    </header>
  );
};

export default AppBar;
