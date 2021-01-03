import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <MainHeader>
      <nav className='main-navigation__header-nav'>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
