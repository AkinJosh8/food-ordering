import "../components/Payment.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Payment({ clearCart }) {
    const [method, setMethod] = useState("card");

    // Get total from location state
    const location = useLocation();

    // Fallback to 0 if total is not provided
    const total = location.state?.total || 0;

    // Navigate to order confirmation page on successful payment
    const navigate = useNavigate()

    const handlePayment = () => {
      clearCart(); 
      navigate("/order-confirmation");
    }
    


    return (
            <div className="payment-page">
                <div className="payment-box">
            <h1>Payment</h1>

        <h3>Pay With:</h3>

        <div className="payment-methods">
          <button className={method === "card" ? "active" : ""} onClick={() => setMethod("card")} >
            Card
          </button>
          <button className={method === "bank" ? "active" : ""} onClick={() => setMethod("bank")} >
            Bank Transfer
          </button>
        </div>

        {method === "card" && (
          <>
                <label>Card Number</label>
                <input type="text" placeholder="1234 5678 9011 1121" />

            <div className="card-row">
              <div>
                <label>Expiration Date</label>
                <input type="text" placeholder="MM/YY" />
              </div>

              <div>
                <label>CVV</label>
                <input type="text" placeholder="123" />
              </div>
            </div>

            <div className="save-card">
              <input type="checkbox" />
              <span>Save card details</span>
            </div>
          </>
        )}

        <button  className="pay-btn" onClick={handlePayment}>  Pay &#8358; {total.toLocaleString()}
        </button>

        <p className="payment-note">
          Your personal data will be used to process your order and support your experience throughout this website. </p>
      </div>
    </div>
  );
}

export default Payment;