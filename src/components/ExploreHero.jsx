import "./ExploreHero.css";
import heroImg from "../images/Rectangle-3.jpg"

function ExploreHero() {

    return (
        <section className="explore-hero">
            <img src={heroImg} alt="Nigerian home-cooked dishes" className="dishes-img"/>

            <div className="explore-overlay">
                <h1>Nigerian Food Menu</h1>

                <p>Authentic Nigerian meals, freshly prepared and delivered across Lagos.
                </p>
            </div>

        </section>
    )
}

export default ExploreHero