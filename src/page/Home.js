import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthProduct } from "../featre/productSlice";
import HomeLayout from "./product/Index";
import ListProduct from "./product/ListProduct";
import Slice from "./product/Slice";
import Spinjs from "./product/Spin";

const Home = () => {
  const { product } = useSelector((state) => state.add);
  const { isLoading } = useSelector((state) => state.add);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(fecthProduct());
  }, []);
  return (
    <div>
      <HomeLayout>
        <Slice />
        {isLoading && <Spinjs />}
        <ListProduct>{product}</ListProduct>
      </HomeLayout>
    </div>
  );
};

export default Home;
