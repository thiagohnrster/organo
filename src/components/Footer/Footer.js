export const Footer = () => {
    return(
        <footer id="bottom" className="footer">
            <div className="footer-in">
                <ul className="social">
                    <li><a href={'#/'} className="social-icon fb"></a></li>
                    <li><a href={'#/'} className="social-icon tw"></a></li>
                    <li><a href={'#/'} className="social-icon ig"></a></li>
                </ul>
                <a href={'#/'} className="logo"></a>
                <span className="copyright">&copy; Desenvolvido por Thiago Celestino</span>
            </div>
        </footer>
    );
}