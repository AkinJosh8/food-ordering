import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Order from "./pages/Order"
import Account from "./pages/Account"
import Cart from "./pages/Cart"
import Hero from './components/Hero'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import OrderConfirmation from './pages/OrderConfirmation'



function App() {
  //the global state for the cart
  const [cartItems, setCartItems] = useState( () => {
    //get the cart items from local storage
    const savedCart = localStorage.getItem("cartItems")

    //if there are cart items in local storage, parse them and return them, otherwise return an empty array
    return savedCart ? JSON.parse(savedCart) : []
  });
  //state to keep track of the search term in the explore page
  const [searchTerm, setSearchTerm] = useState("") 

  //state to keep track of the toast message
  const [toast, setToast] = useState(null)

  //function to show a toast message
  const showToast = (message) => {
    setToast(message)
    setTimeout(() => {
      setToast(null)
    }, 2000)
  }

  //the add to cart function that will be passed down to the meal cards
  const addToCart = (meal) => {

    //check if the meal is already in the cart
    const existingItem = cartItems.find(
      item => item.id === meal.id);

    if (existingItem) {
      //if it is, increase the quantity
    const updatedCart = cartItems.map(item => 
        item.id === meal.id ? { ...item, 
        quantity: item.quantity + 1 } : item );

    setCartItems(updatedCart);
      } else {
          //if it is not, add it to the cart with a quantity of 1
        setCartItems([...cartItems, 
          { ...meal, quantity: 1 }
        ]);
      }
      showToast("Added successfully")
  };

  //use effect to save the cart items to local storage whenever they change
  useEffect(() => {
      //save the cart items to local storage whenever they change
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  //function to increase the quantity of a meal in the cart
  const increaseQuantity = (mealId) => {

    const updatedCart = cartItems.map(item => 
      item.id === mealId ? { ...item, quantity: item.quantity + 1 } : item 
    )
    setCartItems(updatedCart)
    showToast("Added successfully")
  }

  //function to decrease the quantity of a meal in the cart
  const decreaseQuantity = (mealId) => {

    const updatedCart = cartItems.map(item =>
      item.id === mealId ? { ...item, quantity: item.quantity - 1  } : item
    ).filter(items =>  items.quantity > 0)

    setCartItems(updatedCart)
    showToast("Quantity updated")
  }
  
  //funtion to clear the cart 
  const clearCart = () => {
    //called when the user clicks the clear cart button in the cart page
    setCartItems( [])
    localStorage.removeItem("cartItems")
    showToast("Cart cleared")
  }

  

  
  return (
    <>
      <Navbar cartItems={cartItems}
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
      />

      {toast && 
      <div className="toast">
        {toast}
      </div>}
      <Routes>
        <Route path="/" element={
          <Home addToCart={addToCart} 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          />} 
          />
        <Route path="/cart" element={
          <Cart cartItems={cartItems} 
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            clearCart={clearCart}
          />} 
          />
        <Route path="/explore" element={
          <Explore addToCart={addToCart}
           searchTerm={searchTerm}
           setSearchTerm={setSearchTerm}
          />} 
          />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={
          <Checkout cartItems={cartItems} />} />

        <Route path="/payment" element={<Payment clearCart={clearCart} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />

      </Routes>

    </>
  )
}

export default App