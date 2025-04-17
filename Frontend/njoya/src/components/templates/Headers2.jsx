import React from "react";
 import { HEADER_LINKS } from "../../utils/configs/HeaderLinks";
import { NavLink } from "react-router";
 const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    {HEADER_LINKS.map((link) => (
                        <li key={index}>
                            <NavLink
                            to={link.path}
                            className={({ isActive }) => (isActive ? "active" : "")}>

                            {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
 }