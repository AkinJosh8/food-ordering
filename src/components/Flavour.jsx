import "./Flavour.css"
import recTangle7 from "../images/Rectangle-2.jpg"

function Flavour() {
    return (
        <section className="flavour">
            <img src={recTangle7} alt="beans-table" className="beans-table" />

            <div className="flavour-overlay">
                <h1 className="flavour-Addition">Introducing Our New Menu Addition</h1>
                <p className="flavour-Text">Exploring exciting new dishes, crafted with the fresheest
                    ingredients and authentic Nigerian flavors. Limited time offer!
                </p>
                <button className="flavour-btn">Discover what's new</button>

            </div>

        </section>
    )
}

export default Flavour