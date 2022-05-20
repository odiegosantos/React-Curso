import React from "react";

const Conditional = (props) => {

  return (
    <div>
      <h2>The Number {props.numero} </h2>
      {props.numero % 2 === 0 ?
        <span>Even</span>
        :
        <span>Odd</span>
      }
    </div>
  );
};

export default Conditional;