import "./ChefSpecials.css"
import meals from "../data/meals"


function ChefSpecials( { addToCart, searchTerm} ) {

    const filteredSpecials = meals.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 6)

    return (
        <section className="specials-cont">
            <h2 className="name-title">Chef's Specials</h2>

            <div className="specials-grid">
                {filteredSpecials.map((item) => (
                    <div className="special-card" key={item.id}>
                        <div className="image-container">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="card-content">
                            <h3>{item.title}</h3>
                            <p className="description">{item.description}</p>
                            <div className="card-footer">
                                <span className="price"> &#8358; {item.price.toLocaleString()}</span>
                                <button className="add-to-cart" onClick={() => addToCart(item)}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ChefSpecials