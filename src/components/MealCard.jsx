import "./MealCard.css";

function MealCard({ meal , addToCart}) {

    return (
        <div className="meal-card">
            <img src={meal.image} alt={meal.title} />
            <div className="meal-info">

                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <div className="meal-bottom">
                    <span> &#8358; {meal.price.toLocaleString()}</span>

                    <button onClick={() => addToCart(meal)}> + </button>

                </div>
            </div>
        </div>
    )
}


export default MealCard