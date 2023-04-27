import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = ({ navigationLabels }) => {
  return (
    <nav className={styles.navbar}>
      {navigationLabels.map((item) => (
        <NavLink
          key={item.id}
          to={item.route}
          className={({isActive}) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          // style={() => {
          //   return { margin: "10px" };
          // }}
        >
          {item.labelUA}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  navigationLabels: PropTypes.arrayOf(
    PropTypes.shape({ route: PropTypes.string, labelUA: PropTypes.string })
  ),
};
