import React from 'react';
import Child from './Child';

const Father = () => {

  return (
    <div>
      <h2>Component Child</h2>
      <Child lastName="Santos">José</Child>
      <Child lastName="Santos">John</Child>
      <Child lastName="Santos">Antony</Child>
    </div>
  );
};

export default Father;