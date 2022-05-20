import React, { useState } from "react";

const Mega = (props) => {

  const [number, setNumber] = useState(Array(props.amountNumber).fill(0));

  function generateUncontainedNumber(array) {
    const min = 1
    const max = 60
    const newNumber = parseInt(Math.random() * (max - min)) + min
    return array.includes(newNumber)
      ? generateUncontainedNumber(array) : newNumber
  };

  function generateNumber() {
    const novoArray = Array(props.amountNumber)
      .fill(0)
      .reduce((a) => {
        const newNumber = generateUncontainedNumber(a)
        return [...a, newNumber]
      }, [])
      .sort((a, b) => a - b)
    setNumber(novoArray)
  };

  return (
    <div>
      <h2>Mega</h2>
      <h4>{number.join(' - ')}</h4>
      <button onClick={generateNumber}>Generate Number</button>
    </div>

  );
};

export default Mega;