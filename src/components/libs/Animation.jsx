import React from 'react';
import dynamic from 'next/dynamic';

const GSAPAnimation = dynamic(() => import("@/components/libs/GSAPAnimation"), { ssr: true })

export default function Animation() {
    return (<GSAPAnimation />);
}


