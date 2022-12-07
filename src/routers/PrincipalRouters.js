import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '../components/layout/Navigation';
import { Home } from '../components/Home';
import { Portfolio } from '../components/Portfolio';
import { Services } from '../components/Services';
import { Curriculum } from '../components/Curriculum';
import { Contact } from '../components/Contact';
import { Footer } from '../components/layout/Footer';

export const PrincipalRouters = () => {
    return (
        <BrowserRouter>
            {/* Header and Nav */}
            <Navigation/>
            
            {/* Main content */}
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/home" element={ <Home/> }/>
                <Route path="/portfolio" element={ <Portfolio/> }/>
                <Route path="/services" element={ <Services/> }/>
                <Route path="/curriculum" element={ <Curriculum/> }/>
                <Route path="/contact" element={ <Contact/> }/>
            </Routes>

            {/* Footer */}
            <Footer/>
        </BrowserRouter>
    );
}