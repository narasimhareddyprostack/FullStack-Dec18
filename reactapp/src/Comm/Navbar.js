import React from "react";
import Footer from "./Footer";

function Navbar() {
  let emp_Name = "Narasimha";
  let emp_email = "greetlabs@gmail.com";
  return (
    <React.Fragment>
      Data from Navbar: {emp_Name} <Footer one={emp_Name} two={emp_email} />
    </React.Fragment>
  );
}
export default Navbar;
