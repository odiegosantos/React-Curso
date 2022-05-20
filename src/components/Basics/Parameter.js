import React from "react";

const Parameter = (props) => {

  return (
    <>
      <h2>{props.titulo}</h2>
      <h3>{Array(10).fill(0)}</h3>
    </>
  );
};

export default Parameter;