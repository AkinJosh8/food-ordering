import "./ExploreHero.css";
import heroImg from "../images/Rectangle-3.jpg"

function ExploreHero() {

    return (
        <section className="explore-hero">
            <img src={heroImg} alt="Home dishes" className="dishes-img"/>

            <div className="explore-overlay">
                <h1>Chuks Kitchen</h1>
                <p>Chuks Kitchen Nigerian Home Cooking
                    <span>4.8 (1.2) </span>
                </p>
            </div>

        </section>
    )
}

export default ExploreHero