import React from 'react';

import Link from 'next/link'

const Breadcrumbs = ({routingHistory} : IBreadcrumbsProps) => (
    <div>
        {
            routingHistory.map((crumb, index) => {
                const isLastItem = index === routingHistory.length - 1
                if(isLastItem){
                    return (
                    <React.Fragment key={crumb.href}>
                        <span> / </span>
                        {crumb.label}
                    </React.Fragment>
                    )
                }else {
                   return (
                       <React.Fragment key={crumb.href}>
                           <Link href={crumb.href}>{crumb.label}</Link>
                       </React.Fragment>
                   )
                }
            })
        }
    </div>
);



export type TBreadcrumbs = {
    label: string;
    href: string
}

export interface IBreadcrumbsProps {
    routingHistory: TBreadcrumbs[]
}

export default Breadcrumbs;
