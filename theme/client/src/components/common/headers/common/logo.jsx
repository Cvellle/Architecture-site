import React from "react";
import { Link } from "react-router-dom";

function LogoImage(props) {
  return (
    <Link to={`/`} className="custom-logo-link col-md-2">
      <span className="screen-reader-text">Gening</span>
      <img src={`/assets/images/${props.logo}`} alt="" className="img-fluid" />
    </Link>
  );
}
export default LogoImage;
