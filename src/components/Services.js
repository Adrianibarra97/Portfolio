import React from 'react';

export const Services = () => {
    return (
        <div className = "page">
            <h1 className = "heading">Servicios</h1>
            
            <section className = "services">
                <article className = "service">
                    <h2>Diseño Web</h2>
                    <p>Mejoro la apariencia de tu web.</p>
                </article>

                <article className = "service">
                    <h2>Desarrollo Web</h2>
                    <p>Creo tu web desde cero.</p>
                </article>

                <article className = "service">
                    <h2>Posicionamiento Web</h2>
                    <p>Mejoro el SEO de tu web para que la gente la encuentre sin darse cuenta.</p>
                </article>
            </section>
        </div>
    );
}