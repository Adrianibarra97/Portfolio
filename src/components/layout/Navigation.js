import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <header className = "header">
            <div className = "logo">
                <span>@</span>
                <h3>Adrian Ibarra FullStack Developer</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to = "/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/curriculum">Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}