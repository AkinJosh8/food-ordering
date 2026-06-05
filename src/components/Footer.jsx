import "./Footer.css"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

function Footer() {
    const quickLinks = [
        "Home",
        "Explore",
        "My Order",
        "Account",
        "Contact"
    ]

    const socials = [
        { icon: FaFacebookF, url: "https://facebook.com", label: "Facebook" },
        { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
        { icon: FaLinkedinIn, url: "https://linkedin.com", label: "LinkedIn" },
        { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" }
    ]

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h2>Chuks Kitchen</h2>
                    <p>
                        Bringing the authentic flavors of Nigerian home cooking
                        to your table, with passion and care.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        {quickLinks.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>+234 801 234 5678</p>
                    <p>hello@chukskitchen.com</p>
                    <p>03 Forman street, Lagos, Nigeria</p>
                </div>

                <div className="footer-socials">
                    <h3>Social media</h3>

                    <div className="footer-social-icons">
                        {socials.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={item.label}
                                >
                                    <Icon />
                                </a>
                            )
                        })}
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>2026 Chuks Kitchen. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer