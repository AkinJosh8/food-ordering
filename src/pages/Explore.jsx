import { useState } from "react";
import ExploreHero from "../components/ExploreHero";
import "../components/Explore.css"
import meals from "../data/meals"
import ExploreMenu from "../components/ExploreMenu";
import MealCard from "../components/MealCard";

function Explore( { addToCart} ) {
  //state to keep track of the active category in the explore page
  const [activeCategory, setActiveCategory] = useState("popular");

  //state to keep track of the search term in the explore page
  const [searchTerm, setSearchTerm] = useState("")

  return(
    <>
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
          <h1>Popular</h1>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Popular" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>
        <div id="jollof" className="meals-section">
          <h1>Jollof Rice & Entrees</h1>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Jollof Rice & Entrees" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>

        <div id="swallow" className="meals-section">
          <h1>Swallow & Soups</h1>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Swallow & Soups" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()) )
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>

        <div id="grills" className="meals-section">
          <h1>Grills & Sides  </h1>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Grills & Sides" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>
        
        <div id="desserts" className="meals-section">
          <h1>Desserts</h1>

          <div className="meals-grid">
            {meals.filter(meal => meal.category === "Desserts" && meal.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(meal => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
            ))}

          </div>
        </div>

        <div id="beverages" className="meals-section">
          <h1>Beverages </h1>

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