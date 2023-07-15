import React from "react";
import "./NavBar.scss";
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const { navOptions, className, ...rest } = props;

  const navBarClasses = `navbar-container flex m10 ${className}`;

  const navLinks = navOptions.map((link) => {
    const navClasses = `nav-link flex p10 ${link.className}`;
    const navId = link.id ? link.id : link.label.toLowerCase();
    return (
      <Link key={navId} className={navClasses} to={link.to}>
        {link.label}
      </Link>
    );
  });

  return (
    <nav className={navBarClasses} {...rest}>
      {navLinks}
    </nav>
  );
};

export default NavBar;
