import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProcessPayment = () => {
  const [price, setPrice] = useState(0);
  const [seatId, setSeatId] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [showtime, setShowtime] = useState("");

  const handlePurchase = (e) => {
    e.preventDefault();
    // handle the purchase logic here
  };

  return (
    <div>
      <h1>Ticket Page</h1>
      <form onSubmit={handlePurchase}>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Seat ID:
          <input
            type="text"
            value={seatId}
            onChange={(e) => setSeatId(e.target.value)}
          />
        </label>
        <label>
          Purchase Date:
          <input
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
          />
        </label>
        <label>
          Showtime:
          <input
            type="text"
            value={showtime}
            onChange={(e) => setShowtime(e.target.value)}
          />
        </label>
        <button type="submit">Purchase Ticket</button>
        <button type="submit">
          <Link to={`/home`}> Return to HomePage</Link>
        </button>
      </form>
    </div>
  );
};

export default ProcessPayment;
