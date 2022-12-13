import { useEffect, useState } from "react"

export const FloatingButton = ({onPress}) => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", isHidden);
        
        return () => {
            window.removeEventListener("scroll", isHidden);
        };
    }, []);

    const isHidden = () => {
        if (window.scrollY + window.innerHeight === document.body.clientHeight) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    };

    const classes = `floating-btn`;

    return(
        <>
            {!hidden ? <span className={classes} onClick={onPress}></span> : <span className={`${classes} is-hidden`} onClick={onPress}></span>}
        </>
    );
}