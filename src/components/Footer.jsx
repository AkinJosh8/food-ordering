import "./Footer.css"
import facebook from "../images/socials/Facebook.png"
import twitter from "../images/socials/X icon.png"
import linkedin from "../images/socials/Linkedin.png"
import instagram from "../images/socials/Instagram.png"

function Footer() {
    const quickLinks = [
         "Home",
        "Explore",
        "My Order",
        "Account",
        "Contact"
    ]

const socials = [
  { icon: facebook, alt: "Facebook" },
  { icon: twitter, alt: "Twitter" },
  { icon: linkedin, alt: "LinkedIn" },
  { icon: instagram, alt: "Instagram" }
]

    return(
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-brand">
                    <h2>Chuks Kitchen</h2>
                    <p> Bringing the authentic flavors of Nigerian home cooking
                    to your table, with passion and care.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>My Order</li>
                        <li>Account</li>
                        <li>Contact</li>
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
                        {socials.map((item, index) => (
                            <img
                                key={index}
                                src={item.icon}
                                alt={item.alt}
                            />
                        ))}
                    </div>
                    
                </div>
            </div>
            <div className="footer-bottom">
                <p> 2026 Chuks Kitchen. All rights reserved.</p>
            </div>

        </footer>

    )
}

export default Footer