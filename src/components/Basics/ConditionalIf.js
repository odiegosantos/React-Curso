import React from "react";
import If from './If';

const ConditionalIf = (props) => {

  return (
    <div>
      <h2>The Number {props.numero} is</h2>
      <If test={props.numero % 2 === 0}>
        <span>Even</span>
      </If>
      <If test={props.numero % 2 === 1}>
        <span>Odd</span>
      </If>
    </div>
  );
};

export default ConditionalIf;