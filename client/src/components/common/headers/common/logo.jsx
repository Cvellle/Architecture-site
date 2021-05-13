import React from "react";
import { Link } from "react-router-dom";

function LogoImage(props) {
  return (
    <Link to={`/`} className="custom-logo-link">
      <span className="screen-reader-text">Gening</span>
      <img
        src={`/assets/images/${props.logo}`}
        alt=""
        className="img-fluid  col-md-10"
      />
    </Link>
  );
}
export default LogoImage;
