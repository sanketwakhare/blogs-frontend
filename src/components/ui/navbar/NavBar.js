import React from 'react'
import './NavBar.scss'

const NavBar = (props) => {

    const { links, className, ...rest } = props;

    const navBarClasses = `navbar-container flex m10 ${className}`;
    const navLinks = links.map((link) => {
        const navClasses = `nav-link flex p10 ${link.className}`;
        return <a className={navClasses}
            href={link.to}
        // TODO: fix this
        // onClick={(event) => { event.preventDefault() }}
        >{link.label}</a>
    });

    return (
        <div className={navBarClasses} {...rest}>
            {navLinks}
        </div>
    )
}

export default NavBar;