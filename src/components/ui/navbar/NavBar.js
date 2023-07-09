import React from "react";
import "./NavBar.scss";

const NavBar = (props) => {
  const { navOptions, className, ...rest } = props;

  const navBarClasses = `navbar-container flex m10 ${className}`;

  const navLinks = navOptions.map((link) => {
    const navClasses = `nav-link flex p10 ${link.className}`;
    const navId = link.id ? link.id : link.label.toLowerCase();
    return (
      <a
        key={navId}
        className={navClasses}
        href={link.to}
        // TODO: fix this
        // onClick={(event) => { event.preventDefault() }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <nav className={navBarClasses} {...rest}>
      {navLinks}
    </nav>
  );
};

export default NavBar;
