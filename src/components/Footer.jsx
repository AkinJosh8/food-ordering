import "./Footer.css"


function Footer() {
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

                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p> 2026 Chuks Kitchen. All rights reserved.</p>
            </div>

        </footer>

    )
}










export default Footer