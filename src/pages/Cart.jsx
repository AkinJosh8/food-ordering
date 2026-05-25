import "../components/Cart.css";
import { Link } from "react-router-dom";


//the cart page that will display the items in the cart and allow the user to increase or decrease the quantity of each item
function Cart({ cartItems, increaseQuantity, decreaseQuantity, clearCart }) {
  
  //calculate the total price of the items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <section className="cart-page">
      {cartItems.length === 0 ? ( <p className="empty-cart"> Your cart is empty </p> ) : (
        <div className="cart-items">

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item" >
              <img src={item.image} alt={item.title} className="cart-item-image" />

              <div className="cart-item-details">
                <h3>{item.title}</h3>

                <div className="quantity-controls"> 
                  <button onClick={ () => decreaseQuantity(item.id) }> - </button>
                    <span> {item.quantity} </span>
                  <button onClick={ () => increaseQuantity(item.id) }> + </button>  
                </div>
                <p> Quantity: {item.quantity}</p>

                <p className="cart-price"> &#8358; {(item.price * item.quantity).toLocaleString()} </p>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            
            <button className="clear-cart-btn" onClick={clearCart}> Empty Cart</button>
            <Link to="/checkout" className="check-out-btn">
              Proceed to checkout
            </Link>
            <h2>Total:  &#8358; { totalPrice.toLocaleString() } </h2>
          </div>
        </div>
       
      )}
    </section>
  );
}

export default Cart;