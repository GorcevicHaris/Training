import React from "react";
import Header from "./Header";

function Loyaout({ children }) {
  console.log("object");
  return (
    <div>
      <Header />
      {children}
      <div className="footer">FOOTER</div>
    </div>
  );
}

export default Loyaout;
