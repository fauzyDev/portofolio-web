import React from 'react';
import { Button } from "@nextui-org/button";

const Buttons = ({ href, target = '_self', label, icon, classes }) => {
    if (href) {
        return (
            <a 
            href={href} 
            target={target} 
            className={`btn btn-primary ${classes}`}>
            {label} 
            {icon ? <span aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}
                {icon ? <span aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }
}


const ButtonExtend = ({ href, target = '_self', label, icon, classes }) => {
    if (href) {
        return (
            <Button color="default" className={`btn btn-outline ${classes}`}>
            <a 
            href={href} 
            target={target}>
            {label} 
            {icon ? <span aria-hidden="true">{icon}</span> : undefined}
            </a>
            </Button>
        )
    } else {
        return (
            <Button color="default" className={`btn btn-outline ${classes}`}>
                {label}
                {icon ? <span aria-hidden="true">{icon}</span> : undefined}
            </Button>
        )
    }
}

export { Buttons, ButtonExtend }

