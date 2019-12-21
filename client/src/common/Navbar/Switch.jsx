import React from "react";

const Switch = ({ toggleThemeChange, checked }) => (
  <label className="switch">
    <input
      type="checkbox"
      defaultChecked={checked}
      onChange={toggleThemeChange}
    />
    <span className="slider round" />
  </label>
);

export default Switch;
