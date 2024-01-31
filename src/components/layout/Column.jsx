import React from 'react';

export default function Column({ children, sm, md, lg, xl, w, className }) {

    const columnClasses = `flex-shrink-0 ${w ? `w-${w}/12` : ''} ${sm ? `sm:w-${sm}` : ''} ${md ? `md:w-${md}` : ''} ${lg ? `lg:w-${lg}` : ''} ${xl ? `xl:w-${xl}` : ''}`;

    return (
        <div className={`${columnClasses} ${className && className}`}>
            {children}
        </div>
    );
}
