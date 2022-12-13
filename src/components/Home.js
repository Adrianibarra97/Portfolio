import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1>
                Hola, soy Adrian Joel Ibarra Bilbao, desarrollador de software.
                Actualmente ofrezco servicios web para potenciar tu negocio.
            </h1>

            <h2>
                Creando sitios webs visibles y relevante para los buscadores y
                de gran escalabilidad para adaptarse al crecimiento del mismo.
                <Link to = "/contact">Contactarme</Link>
            </h2>

            <section className = "lasts-works"> 
                <h2>Algunos proyectos realizados.</h2>
                <p>Estos son los proyectos mas recientes: </p>
                
                <div className = "works">
                    
                </div>  
            </section>
        </div>
    );
}