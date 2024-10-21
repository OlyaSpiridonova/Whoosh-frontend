import React from 'react';

export type CardPayment = {
    id: number;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    link?: string;
    linkText?: string;
    description: string;
};
