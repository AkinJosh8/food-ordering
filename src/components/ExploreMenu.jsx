import "./ExploreMenu.css";
import { useState } from "react";

function ExploreMenu() {
   const [activeCategory, setActiveCategory] = useState("popular");

    return (
        <div className="explore-menu">
            <h2>Menu Categories</h2>

            <ul>
                <li className={activeCategory === "popular" ? "active-category" : ""}
                        onClick={() => {setActiveCategory("popular");
                            document.getElementById("popular").scrollIntoView({ behavior: "smooth",
                        });
                    }}
                    >
                    Popular
                </li>

                <li className={activeCategory === "jollof" ? "active-category" : ""} 
                    onClick={() => {setActiveCategory("jollof");
                        document.getElementById("jollof").scrollIntoView({ behavior: "smooth",
                    });
                }}>
                    Jollof Rice & Entrees
                </li>
                <li className={activeCategory === "swallow" ? "active-category" : ""} onClick={() => {
                    setActiveCategory("swallow");
                    document.getElementById("swallow").scrollIntoView({
                        behavior: "smooth",
                    });
                }}>
                    Swallow & Soups
                </li>
                <li className={activeCategory === "grills" ? "active-category" : ""} onClick={() => {
                    setActiveCategory("grills");
                    document.getElementById("grills").scrollIntoView({
                        behavior: "smooth",
                    });
                }}>
                    Grills & Sides
                </li>
                <li className={activeCategory === "desserts" ? "active-category" : ""} onClick={() => {
                    setActiveCategory("desserts");
                    document.getElementById("desserts").scrollIntoView({
                        behavior: "smooth",
                    });
                }}>
                    Desserts
                </li>
                <li className={activeCategory === "beverages" ? "active-category" : ""} onClick={() => {
                    setActiveCategory("beverages");
                    document.getElementById("beverages").scrollIntoView({
                        behavior: "smooth",
                    });
                }}>
                    Beverages
                </li>
            </ul>
        </div>
    )
}

export default ExploreMenu