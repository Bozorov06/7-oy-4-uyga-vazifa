import Hero from "./Hero";
import Products from "./Products";
import { useSelector } from "react-redux";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div>
      <Hero />
      <Products products={products} />
    </div>
  );
};

export default Home;
