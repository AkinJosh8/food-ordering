import "./Categories.css"
import recTangle from "../images/Rectangle-4.jpg"
import recTangle2 from "../images/Rectangle-10.jpg"
import recTangle3 from "../images/Rectangle-7.jpg"
import recTangle4 from "../images/Rectangle-11.jpg"
import recTangle5 from "../images/Rectangle-9.jpg"
import recTangle6 from "../images/Rectangle-4.jpg"
import recTangle12 from "../images/Rectangle-16.jpg"
import recTangle24 from "../images/Rectangle-28.jpg"
import mealCard from "../components/MealCard"

const categories = [
    {
        id: "1",
        name: "Jollof Delights",
        image: recTangle,
        
    },
    {
        id: "2",
        name: "Swallow & Soups",
        image: recTangle2,
    },
    {
        id: "3",
        name: "Grills & BBQ",
        image: recTangle3,
    },
    {
        id: "4",
        name: "Sweet Treats",
        image: recTangle4,
    },
    {
        id: "5",
        name: "Deserts",
        image: recTangle12,
    },
    {
        id: "6",
        name: "Beverages",
        image: recTangle24,
    }
]

function Categories({ addToCart}) {
    return(
        <section className="categories">
            <h2>Popular Categories</h2>

            <div className="category-grid">
                {categories.map((item, index) =>(
                    <div className="category-card" key={item.id}>
                        <img src={item.image } alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Categories