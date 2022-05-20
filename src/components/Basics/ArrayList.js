import React from "react";
import products from '../../data/Products';

const ArrayList = () => {

  function getProductList() {

    return products.map(prod => {
      return (
        <li
          key={prod.id}>
          {prod.id}
          - {prod.name}
          - R$ {prod.price}
        </li>
      );
    })
  };

  return (
    <div>
      <h2>Array List</h2>
      <ul>
        {getProductList()}
      </ul>
    </div>

  );
};

export default ArrayList;