import "../components/Order.css"; 
import orders from "../data/orders";


function Order() {
  return (
    <section className="order-page">
      <h1 className="order-title">My Orders</h1>

      <div className="order-list">
        {/* map through the orders and display each order with its id, date, status, items, and total price */}
        {orders.map(order => (
          <div key={order.id} className="order-card">

            {/* Header */}
            <div className="order-header">
              <p className="order-id">Order #{order.id}</p>
              <p className="order-date">{order.date}</p>
              {/* display the order status with a different color for each status e.g. green for delivered, orange for pending, red for cancelled */}
              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            {/* display the items in the order with their quantity and title */}
            <div className="order-items">
              {order.items.map((item, index) => (
                <p key={index}>
                  {item.quantity}x {item.title}
                </p>
              ))}
            </div>

            {/* display the total price of the order formatted */}
            {/* as Nigerian Naira with commas as thousand separators */}
            <div className="order-footer">
              <h3>Total: &#8358; {order.total.toLocaleString()}</h3>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Order;