import React, { useState } from "react";
import Child from './Child';

const Dad = () => {

  const [text, setTexto] = useState('Valor');
  const [num, setNum] = useState(0);

  function whenClick(generatedValue, text) {
    setNum(generatedValue);
    setTexto(text);
  };

  return (
    <div>
      <h2>Random Number</h2>
      <h4>{text}: {num}</h4>
      <Child toClick={whenClick}></Child>
    </div>
  );
};

export default Dad;