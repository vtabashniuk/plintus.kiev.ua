const Dropdown = ({ submenues }) => {
  return submenues.map((submenu) => <li key={submenu.id} style={{display: "none"}}>{submenu.name}</li>);
};

export default Dropdown;
