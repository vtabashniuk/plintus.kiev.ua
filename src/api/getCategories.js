import axios from "axios";

const getCategories = async () => {
    const response = await axios.get(
      "https://dropsite.odessey.od.ua/wp-json/wc/store/v1/products/categories/",
      { params: { hide_empty: false } }
    );
  
    return response?.data;
  };

  export default getCategories;