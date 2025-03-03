import React, { useEffect } from "react";
import { Filter, Home, Navbar, Wishlist,Cart } from "./components";
import { Route, Routes } from "react-router-dom";
import {
  setError,
  setIsLoading,
  setProducts,
  setWishlist,
} from "./lib/slices/productsSlice";
import productsService from "./service/product";
import { useDispatch, useSelector } from "react-redux";
import {getFromLocal,setToLocal} from './lib/Is'
const App = () => {
  const { wishlist } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      dispatch(setIsLoading(true));
      try {
        const { data } = await productsService.getAll();
        dispatch(setProducts(data));
        dispatch(setError(null));
      } catch (error) {
        dispatch(setError(error));
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    getProducts();

    const wishlists = getFromLocal("wishlist");
    if (wishlists) {
      dispatch(setWishlist(wishlists));
    }
  }, []);

  useEffect(() => {
    setToLocal("wishlist", wishlist);
  }, [wishlist]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter/:q" element={<Filter />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
