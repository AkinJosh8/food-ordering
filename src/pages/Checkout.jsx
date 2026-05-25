import "../components/Checkout.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Checkout({ cartItems}) {
    const [deliveryType, setDeliveryType] = useState("delivery")

    const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
    )

    const deliveryFee = deliveryType === "delivery" && subtotal > 0 ? 1500 : 0
    const serviceFee = subtotal * 0.05
    const tax = subtotal * 0.02

    const total = subtotal + deliveryFee + serviceFee + tax
    
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handlePayment = () => {
        setLoading(true)

        setTimeout(() => {
            clearCart()
            navigate("/order-confirmation")
        }, 2000)
    }

    return (
        <div className="checkout-page">

            <div className="delivery-box">
                <h2>Delivery Details</h2>

                <label>Delivery Address</label>
                <textarea placeholder="Enter your delivery address"></textarea>

                <label>Delivery Type</label>
                <select>
                    <option>Select Time</option>
                    <option>ASAP</option>
                    <option>30 mins</option>
                    <option>1 hour</option>
                </select>

                <label>Delivery Instructions (Optional) </label>
                <textarea placeholder="E.g Leave at the gate, call on arrival"></textarea>

                <label>Contact Phone</label>
                <input type="tel" placeholder="+234 811 286 1088" />
            </div>

            <div className="summary-box">
                <h2>Order Summary</h2>

                <div className="promo-box">
                    <input type="text" placeholder="Enter Code Here" />
                    <button>Apply</button>
                </div>

                <p><span>Subtotal:</span> <span> &#8358; {subtotal.toLocaleString()}</span></p>
                <p><span>Delivery Fee:</span> <span> &#8358; {deliveryFee.toLocaleString()}</span></p>
                <p><span>Service Fee:</span> <span> &#8358; {serviceFee.toLocaleString()}</span></p>
                <p><span>Tax:</span><span> &#8358; {tax.toLocaleString()}</span></p>
                
                <h3><span>Total:</span> <span> &#8358; {total.toLocaleString()}</span></h3>

                <div className="delivery-toggle">
                    <button
                        className={deliveryType === "delivery" ? "active" : ""}
                        onClick={() => setDeliveryType("delivery")}
                        > Delivery
                    </button>
                    <button className={deliveryType === "pickup" ? "active" : ""}
                        onClick={() => setDeliveryType("pickup")}
                        > Pick up
                    </button>
                </div>

                    <label>Special Instructions for Restaurant</label>
                    <textarea placeholder="E.g no onion, extra sauce, etc."></textarea>

                    <Link to="/payment" state={{total}} > <button className="checkout-btn" onClick={handlePayment}> {loading ? "Processing..." : "Proceed to Payment"} </button> </Link>
            </div>
                <Link to="/cart" className="back-to-cart">Back to Cart</Link>
        </div>
    )
}

export default Checkout