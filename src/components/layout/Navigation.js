import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <header>
            <h1>Adrian Ibarra FullStack Developer</h1>
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