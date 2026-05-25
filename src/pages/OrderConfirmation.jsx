import { Link } from "react-router-dom"
import "../components/orderConfirmation.css"

function OrderConfirmation() {
    const orderNumber = Math.floor(Math.random() * 1000000)

    return (
        <div className="confirmation-page">
            <div className="confirmation-box"> 
                <div className="success-icon">&#x2705; </div>
                <h2>Order Confirmed</h2>
                <p>Your order has been placed successfully. Thank you for your purchase!</p>
                <p>Order Number: # {orderNumber}</p>


                <Link to="/"> <button className="home-btn"> Back to Home </button> </Link>
            </div>
        </div>
    )
}

export default OrderConfirmation