import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"
import NavMenuItem from "components/NavMenuItem/NavMenuItem";

const Navbar = ({ navMenu }) => {
  return (
    <nav>
      <ul className={styles.list}>
      {/* {navigationLabels.map((item) => (<li key={item.id}>
        <NavLink
          to={item.url}
          className={({isActive}) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
        >
          {item.name}
        </NavLink></li>
      ))} */}
      {navMenu.map(menuItem => {return <NavMenuItem items={menuItem} />})}
      </ul>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  navMenu: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string, name: PropTypes.string })
  ),
};
