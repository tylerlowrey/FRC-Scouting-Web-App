import React, {useEffect, useState} from "react";
import '../Styles/Footer.css';

const Footer = () => {

    let d = new Date();
    let copyrightYear = d.getFullYear();

    return (
        <footer>
            <p className="footer-text">Copyright &copy; {copyrightYear} FRC Team 283</p>
        </footer>
    )
};

export default Footer;