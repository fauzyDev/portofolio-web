import React from 'react';
import { Button } from "@nextui-org/button";

const Buttons = ({ href, target = '_self', label, icon, classes }) => {
    if (href) {
        return (
            <Button className={`btn bg-blue-600 btn-primary ${classes}`}>
            <a 
            href={href} 
            target={target}
            rel="noopener noreferrer">
            {label} 
            {icon ? <span aria-hidden="true">{icon}</span> : undefined}
            </a>
            </Button>
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
            <Button color="default" className={`btn btn-outline ${classes}`}>
            <a 
            href={href} 
            target={target}
            rel="noopener noreferrer">
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

