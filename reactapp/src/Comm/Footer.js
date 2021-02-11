import React from "react";
function Footer(props) {
  return (
    <React.Fragment>
      <sandeep>{JSON.stringify(props)}</sandeep>
      <h1> Reading data from NavBar.....:{props.one}</h1>

      <h5> read anohter props : {props.two}</h5>
    </React.Fragment>
  );
}
export default Footer;
