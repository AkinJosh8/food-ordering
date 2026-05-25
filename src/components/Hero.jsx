import "./Hero.css"
import recTangle from "../images/Rectangle-5.jpg"

function Hero() {
    return (
        <section className="hero">
            <img src={recTangle} alt="food-table" className="food-table"/>

            <div className="hero-overlay">
                <h1>The Heart of Nigerian Home Cooking </h1>
                <p>Handcrafted with passion, delivered with care.</p>
                <button className="hero-btn">Discover what's new</button>
            </div>
        </section>
    )
}

export default Hero
