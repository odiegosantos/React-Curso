import React from 'react';

const Child = (props) => {

  return (
  <div>
    <p>{props.children} - {props.lastName}</p>
  </div>
  );
};

export default Child;