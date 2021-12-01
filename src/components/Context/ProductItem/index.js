import React from "react";
import { ProductsContext } from "../../../context";
import style from "./ProductItem.module.css";

const ProductItem = () => {
  const renderProps = ({ item1, item2, item3 }) => {
    return (
      <div className={style.list_wrap}>
        <ul className={style.list}>
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
    );
  };

  return <ProductsContext.Consumer>{renderProps}</ProductsContext.Consumer>;
};

export default ProductItem;
