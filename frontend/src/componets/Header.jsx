import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/Signup">Signup</NavLink> */}
        {/* <NavLink to="./StudentDashboard">Student</NavLink> */}
      </nav>
    </Header>
  );
};

export default Header;
