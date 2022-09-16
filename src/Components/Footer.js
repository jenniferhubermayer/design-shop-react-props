import "./Footer.css";

import Social from "./Social"

// IMPORT ICONS
import iconTwitter from "../icon/iconmonstr-twitter-1-32.png"
import iconFacebook from "../icon/iconmonstr-facebook-4-32.png"
import iconPinterest from "../icon/iconmonstr-pinterest-1-32.png"
import iconInstagram from "../icon/iconmonstr-instagram-11-32.png"

// COMPONENT

const Footer = () => {
    return (
        <footer>
            <section className="footer-info">
                <div id="footer-info-about">
                    <h2>Info</h2>
                    <p>Carefully curated online design store. Featuring simple, beautiful and thoughtfully designed products for everyday use</p>
                </div>
                <div id="footer-info-contact">
                    <h2>Get in touch</h2>
                    <a href="mailto:hello@thedsgnshop.com">hello@thedsgnshop.com</a>
                    <p>Los Angeles, CA</p>
                </div>
                <div id="footer-info-newsletter">
                    <h2>Newsletter</h2>
                    <p><a href="#">Sign up</a> for the latest arrivals, special offers and weekly picks.</p>
                </div>
                <div id="footer-info-social">
                    <h2>Follow us</h2>
                    <div className="footer-info-social-wrapper">
                    <Social socialLink="https://instagram.com" socialImage={iconInstagram} socialAlt="Instagram logo"/>
                    <Social socialLink="https://pinterest.com" socialImage={iconPinterest} socialAlt="Pinterest logo"/>
                    <Social socialLink="https://twitter.com" socialImage={iconTwitter} socialAlt="Twitter logo"/>
                    <Social socialLink="https://facebook.com" socialImage={iconFacebook} socialAlt="Facebook logo"/>
                    </div>
                </div>
            </section>
            <section className="footer-disclaimer">
                <p>© 2021 The Design Shop</p>
                <div id="footer-disclaimer-content">
                    <div id="footer-disclaimer-content-links">
                        <a href="#">Disclaimer</a>
                        <a href="#">Shop</a>
                        <a href="#">Weekly Picks</a>
                    </div>
                    <p>Made/Curated by <a href="#">Ruby Bacanovic</a></p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;