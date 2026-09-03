import { useState } from "react";
import ExploreHero from "../components/ExploreHero";
import "../components/Explore.css"
import meals from "../data/meals"
import ExploreMenu from "../components/ExploreMenu";
import MealCard from "../components/MealCard";
import SEO from "../components/SEO"

function Explore( { addToCart} ) {
  //state to keep track of the active category in the explore page
  const [activeCategory, setActiveCategory] = useState("popular");

  //state to keep track of the search term in the explore page
  const [searchTerm, setSearchTerm] = useState("")

  return(
    <>
      <SEO
        title="Nigerian Food Menu | Chuks Kitchen"
        description="Order authentic Nigerian meals from Chuks Kitchen, freshly prepared and delivered across Lagos. Explore jollof rice, soups, grills, sides, desserts and more."
        canonical="https://chukks-kitchen.netlify.app/explore"
      />
      <ExploreHero />
      <div className="search-bar">
        <input type="text" placeholder="Search meals..." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> 
      </div>

      <section className="explore-page">
        <ExploreMenu 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
        />

        <div id="popular" className="meals-section">
          <h2>Popular</h2>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Popular" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>
        <div id="jollof" className="meals-section">
          <h2>Jollof Rice & Entrees</h2>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Jollof Rice & Entrees" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>

        <div id="swallow" className="meals-section">
          <h2>Swallow & Soups</h2>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Swallow & Soups" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()) )
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>

        <div id="grills" className="meals-section">
          <h2>Grills & Sides  </h2>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Grills & Sides" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>
        
        <div id="desserts" className="meals-section">
          <h2>Desserts</h2>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Desserts" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>

        <div id="beverages" className="meals-section">
          <h2>Beverages </h2>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Beverages" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>


      </section>
    </>

  ) 
}

export default Explore;