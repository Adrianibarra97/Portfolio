import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <header className = "header">
            <div className = "logo">
                <span>@</span>
                <h3>ADRI IBAR DEV</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to = "/home" 
                            className = {({isActive}) => isActive ? "active" : ""}
                        >INICIO</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to = "/portfolio"
                            className = {({isActive}) => isActive ? "active" : ""}
                        >PORTAFOLIO</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to = "/services"
                            className = {({isActive}) => isActive ? "active" : ""}
                        >SERVICIOS</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to = "/curriculum"
                            className = {({isActive}) => isActive ? "active" : ""}
                        >CURRICULUM</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to = "/contact"
                            className = {({isActive}) => isActive ? "active" : ""}
                        >CONTACTO</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}