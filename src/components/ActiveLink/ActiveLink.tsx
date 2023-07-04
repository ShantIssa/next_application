"use client"

import { useRouter, usePathname } from 'next/navigation'

import type { ReactNode } from "react";

const ActiveLink = ({ children, href }: IActiveProps) => {
    const router = useRouter()
    const pathName = usePathname()

    const style = {
        marginRight: 10,
        color: pathName === href ? 'black' : 'white',
        textDecoration: pathName === href ? 'underline' : 'none',
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}

export interface IActiveProps {
    children: ReactNode
    href: string;
}

export default ActiveLink
