import React from 'react';

import {Routes} from '@/constants'
import {ActiveLink} from "@/components";

import styles from './Header.module.css'

const Header = ({}) => {

    const headerContent = Routes.map(({href,name}) => {
        return <ActiveLink href={href} key={href}>{name}</ActiveLink>
    })

    return (
        <header className={styles.container}>
            {headerContent}
        </header>
    );
};

export default Header;
