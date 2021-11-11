import React, { useState } from 'react';
import Link from 'next/link';

import Logo from '../../logo/Logo';

import styling from './Nav.module.scss';

const Nav = () => {
    return (
        <>
            <nav className={styling.nav}>
                <div className={styling.container}>
                    <Logo />
                    <ul className={styling.menu}>
                        <li>
                            <Link href='/write'>
                                <a>Write</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Nav;