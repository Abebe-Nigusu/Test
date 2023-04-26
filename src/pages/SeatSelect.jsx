import React, { useState } from "react";

const SeatSelection = () => {
  const [seats, setSeats] = useState(Array(40).fill(false));
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (index) => {
    const newSeats = [...seats];
    newSeats[index] = !newSeats[index];
    setSeats(newSeats);

    if (!selectedSeats.includes(index)) {
      setSelectedSeats([...selectedSeats, index]);
    } else {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== index));
    }
  };

  const renderSeats = () => {
    const seatRows = [];

    for (let i = 0; i < seats.length; i += 10) {
      const seatRow = [];

      for (let j = i; j < i + 10; j++) {
        seatRow.push(
          <div
            key={j}
            className={`seat ${seats[j] ? "selected" : ""}`}
            onClick={() => handleSeatClick(j)}
          >
            {j + 1}
          </div>
        );
      }

      seatRows.push(
        <div key={i} className="seat-row">
          {seatRow}
        </div>
      );
    }

    return seatRows;
  };

  return (
    <div>
      <h1>Select your seats</h1>
      <div className="seat-map">{renderSeats()}</div>
      <div>
        <p>Selected Seats: {selectedSeats.join(", ")}</p>
      </div>
    </div>
  );
};

export default SeatSelection;

/* This component creates an array of 40 seats (10 rows of 4 seats each), and uses the useState hook to keep track of which seats are selected. When a seat is clicked, the handleSeatClick function updates the state of the seats array to reflect the selected/unselected status of the clicked seat, and also updates the selectedSeats array to keep track of which seats are currently selected.
The renderSeats function generates the actual seat map by iterating over the seats array and creating a nested array of seat rows and individual seat components. Each seat component has a className of selected if its corresponding index in the seats array is true, and a click handler that calls the handleSeatClick function.
Finally, the component renders the seat map and a list of currently selected seats. You can customize the styles for the seat map and individual seats by adding CSS classes to your stylesheet. */
