import { useDispatch } from "react-redux";
import { addProducts } from "./store/productsSlice";

const products = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    dispatch(addProducts(data));
  };
  fetchData();
};

export default products;
