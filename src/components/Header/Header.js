import { useEffect, useState } from 'react';

export const Header = () => {
    const [sticky, setSticky] = useState('header');
  
    // on render, set listener
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 90 ? "header is-sticky" : "header";
        setSticky(stickyClass);
    };

    const classes = `${sticky}`;
    
    return (
        <header className={classes}>
            <div className="header-in">
                <span className="logo"></span>
            </div>
        </header>
    );
}