import React, { useState } from "react";
const SelectComp = (props) => {
  const { keys, onSelect } = props;
  const [locval, setLocval] = useState("");

  const setValues = (event) => {
    const newValue = event.target.value;
    setLocval(newValue);
    onSelect(newValue); 
  };

  return (
    <>
    <body>
      
      <div className="s2">
      <select 
        value={locval}
        onChange={(e) => setValues(e)}
      >
        <option value="">--- Select Station ---</option>
        {keys.map((element, index) => (
          <option key={index} value={element}>
            {element}
          </option>
          
        ))}
      </select>
      </div>
      
      </body>
    </>
  );
};

export default SelectComp;
