import React from 'react';

const Button = ({ href, target = '_self', label, icon, classes }) => {
    if (href) {
        return (
            <a 
            href={href} 
            target={target} 
            className={`btn btn-primary ${classes}`}>
            {label} 
            {icon ? <span className="material-symbols" aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}
                {icon ? <span className="material-symbols" aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }
}


const ButtonExtend = ({ href, target = '_self', label, icon, classes }) => {
    if (href) {
        return (
            <a 
            href={href} 
            target={target} 
            className={`btn btn-outline ${classes}`}>
            {label} 
            {icon ? <span className="material-symbols" aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    } else {
        return (
            <button className={`btn btn-outline ${classes}`}>
                {label}
                {icon ? <span className="material-symbols" aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }
}

export { Button, ButtonExtend }

