import Hero from "../components/Hero"
import SearchBar from "../components/searchBar"
import Categories from "../components/Categories"
import ChefSpecials from "../components/ChefSpecials"
import Flavour from "../components/Flavour"
import Footer from "../components/footer"
import { useState, useEffect } from "react";
import Loader from "../components/Loader"

function Home({addToCart}) {
    const [searchTerm, setSearchTerm] = useState("")

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;
    return (
        <>
            <Hero />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Categories />
            <ChefSpecials addToCart={addToCart} searchTerm={searchTerm} />
            <Flavour />
            <Footer />
            
        </>
    )
}

export default Home