import React from 'react';

export const Contact = () => {
    return (
        <div className = "page">
            <h1>Contacto</h1>
            
            <form className = "contact" action = "mailto:adribirra@gmail.com">
                <input type = "text" placeholder = "Nombre:"/>
                <input type = "text" placeholder = "Apellido:"/>
                <input type = "text" placeholder = "Email:"/>
                <textarea placeholder = "Motivo del contacto:"/>
                <input type = "submit" value = "Enviar"/>
            </form>
        </div>
    );
}