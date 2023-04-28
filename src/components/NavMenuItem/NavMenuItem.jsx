import Dropdown from "components/Dropdown/Dropdown";
import { NavLink } from "react-router-dom";

const NavMenuItem = ({ items }) => {
  return (
    <li key={items.id}>
      {items?.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.name}{" "}
          </button>
          <Dropdown submenues={items.submenu} />
        </>
      ) : (
        <NavLink>{items.name}</NavLink>
      )}
    </li>
  );
};

export default NavMenuItem;
