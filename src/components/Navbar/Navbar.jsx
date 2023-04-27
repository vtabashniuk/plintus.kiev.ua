import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = ({ navigationLabels }) => {
  return (
    <nav>
      <ul className={styles.list}>
      {navigationLabels.map((item) => (<li key={item.id}>
        <NavLink
          to={item.route}
          className={({isActive}) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
        >
          {item.labelUA}
        </NavLink></li>
      ))}
      </ul>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  navigationLabels: PropTypes.arrayOf(
    PropTypes.shape({ route: PropTypes.string, labelUA: PropTypes.string })
  ),
};
