 import React from "react";

 const Child = (props) => 

  <div>
    <button onClick={() => {
      props.toClick(Math.floor(Math.random() * 100), 'Valor')}}>
      Press
    </button>
  </div>

 export default Child;