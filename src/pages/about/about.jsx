import React from "react";
import { NavLink } from "react-router";

const about = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>

      <NavLink to="/" className="btn btn-primary">
        GO TO HOME PAGE
      </NavLink>

      <div>
        <NavLink to="/register" className="btn btn-primary">
          GO TO REGISTER PAGE
        </NavLink>
      </div>
    </div>
  );
};

export default about;
