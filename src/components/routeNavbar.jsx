"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import '../app/(routes)/bedroom/bedroom.css'
import { Menu, X } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

const RouteNavbar = () => {
    const hideMenu = () => {
     setShow(false)
    };

    const showMenu = () => {
        setShow(true)
    };
    const [show,setShow] = useState(false)

    return (
        <nav>
            <div className="waviy">
                <span style={{ '--i': 1 }}>L</span>
                <span style={{ '--i': 2 }}>u</span>
                <span style={{ '--i': 3 }}>c</span>
                <span style={{ '--i': 4 }}>k</span>
                <span style={{ '--i': 5 }}>y</span>
                <span style={{ '--i': 6 }}>I</span>
                <span style={{ '--i': 7 }}>n</span>
                <span style={{ '--i': 8 }}>t</span>
                <span style={{ '--i': 9 }}>e</span>
                <span style={{ '--i': 10 }}>r</span>
                <span style={{ '--i': 10 }}>i</span>
                <span style={{ '--i': 10 }}>o</span>
            </div>
            <div className={`navbar`} id="navLinks">
               
                <ul  className={`navbar ${show?'-z-10 -translate-x-[400px]':''}`}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/locate">Locate Us</Link></li>
                    <li className='hidden md:block'><UserButton afterSignOutUrl='/'/></li>
                    <X className={`${show?'z-10 text-white relative bottom-24 left-32':'hidden '} `} onClick={hideMenu}/>
                </ul>
            </div>
            <Menu className={`md:hidden `} onClick={showMenu}/>
        </nav>
    );
};

export default RouteNavbar;