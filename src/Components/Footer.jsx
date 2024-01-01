import React, { useContext } from "react";
// import Context from './utils/Context'
import iAmContext from "./utils/Context";
// Footer component for footer section
const Footer = () => {
  const { setMushi, name } = useContext(iAmContext);
  return (
    <div className="footer">
      <span>Type to change via CONTEXT - {name}</span>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setMushi(e.target.value);
        }}
      />
    </div>
  );
};
export default Footer;
