import React from 'react';
import { Link } from 'react-router-dom';
import { WorkList } from './WorkList';

export const Home = () => {
    return (
        <div className = "home">
            <h1>
                Hola, soy <strong>Adrian Joel Ibarra Bilbao</strong>, desarrollador de software.
                Actualmente ofrezco <strong>servicios web</strong> para potenciar tu negocio.
            </h1>

            <h2 className = "title">
                Creando sitios webs visibles y relevante para los buscadores y
                de gran escalabilidad para adaptarse al crecimiento del mismo.
                <Link to = "/contact">Contactarme</Link>
            </h2>

            <section className = "lasts-works"> 
                <h2 className = "heading">Algunos proyectos realizados.</h2>
                <p>Estos son los proyectos mas recientes: </p>
                <WorkList limit = "3"/>  
            </section>
        </div>
    );
}