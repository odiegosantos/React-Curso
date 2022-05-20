import React from "react";

const Button = (props) => {

  return (
    <div>
      <button onClick={props.onInc}>+</button>
      <button onClick={props.onDec}>-</button>
    </div>
  );
};

export default Button;