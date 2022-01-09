import React from "react";

function CustomOption({displayName,value}) {
  return (
    <option className="option" value={value}>
      {displayName.toUpperCase()}
    </option>
  );
}

export default CustomOption;
