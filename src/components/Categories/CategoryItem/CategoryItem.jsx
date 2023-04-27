import PropTypes from "prop-types";

const CategoryItem = ({ categorylabel }) => {
  return <p>{categorylabel}</p>;
};

export default CategoryItem;

CategoryItem.propTypes = { categorylabel: PropTypes.string };
