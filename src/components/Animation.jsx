"use client"

import React from 'react';
import dynamic from 'next/dynamic';

const GSAPAnimation = dynamic(() => import("@/components/GSAPAnimation"), { ssr: false })

export default function Animation () {
    return ( <GSAPAnimation/> );
}

