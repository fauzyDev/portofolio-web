import React from 'react';
import { Button } from "@nextui-org/button";

const Buttons = ({ href, target = '_self', label, icon, classes }) => {
    if (href) {
        return (
            <a
            className={`btn bg-blue-600 btn-primary ${classes}`} 
            href={href} 
            target={target}
            rel="noopener noreferrer">
            {label} 
            {icon ? <span aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    } else {
        return (
            <Button className={`btn bg-blue-600 btn-primary ${classes}`}>
                {label}
                {icon ? <span aria-hidden="true">{icon}</span> : undefined}
            </Button>
        )
    }
}


const ButtonExtend = ({ href, target = '_self', label, icon, classes }) => {
    if (href) {
        return (
            <a
            className={`btn btn-outline ${classes}`} 
            href={href} 
            target={target}
            rel="noopener noreferrer">
            {label} 
            {icon ? <span aria-hidden="true">{icon}</span> : undefined}
            </a>
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

