import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ navigationLabels }) => {
  return navigationLabels.map((item) => (
    <NavLink key={item.id} to={item.route} style={()=>{return {margin: '10px'}}}>{item.labelUA}</NavLink>
  ));
};

export default Navbar;

Navbar.propTypes = {
  navigationLabels: PropTypes.arrayOf(
    PropTypes.shape({ route: PropTypes.string, labelUA: PropTypes.string })
  ),
};
