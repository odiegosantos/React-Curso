import React, { useState } from "react";

  const InputId = (props) => {

    const [nome, setNome] = useState('Type it');
    return (
      <>
        <h2>Input</h2>
        <input type="text" value={nome} 
          onChange={e => setNome(e.target.value)}
        />
        <h3>{nome}</h3>
      </>
    );
  };

export default InputId;