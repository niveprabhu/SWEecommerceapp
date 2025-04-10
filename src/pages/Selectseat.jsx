import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../assets/assets';

const SelectSeat = () => {
  const { id } = useParams();
  const movie = products.find((m) => m.id.toString() === id);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = ['A', 'B', 'C', 'D', 'E'];
  const cols = Array.from({ length: 10 }, (_, i) => i + 1);

  const seatPrice = products.ticketprice;
  //const totalPrice = (selectedSeats.length) * seatPrice;
 

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const navigate = useNavigate();

const handleConfirmBooking = () => {
  navigate('/cart', {
    state: {
      movie,
      selectedSeats,
      subtotal: selectedSeats.length * products.ticketprice
    }
  });
};


  return (
    <div className="p-6 flex flex-col lg:flex-row gap-8 dark:bg-gray-900 min-h-screen text-black dark:text-white">
      {/* Left: Seating Chart */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">Select Your Seats</h2>
        <div className="grid grid-cols-10 gap-3">
          {rows.map((row) =>
            cols.map((col) => {
              const seat = `${row}${col}`;
              const isSelected = selectedSeats.includes(seat);
              return (
                <button
                  key={seat}
                  onClick={() => handleSeatClick(seat)}
                  className={`w-10 h-10 rounded ${
                    isSelected
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-400'
                  }`}
                >
                  {seat}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Right: Movie Info & Summary */}
      <div className="w-full lg:w-1/3 p-4 rounded bg-gray-100 dark:bg-gray-800 shadow-lg">
        <img src={products.image} alt={products.Name} className="w-full h-48 object-cover rounded mb-4" />
        <h3 className="text-xl font-bold mb-2">{products.Name}</h3>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">{products.Description}</p>
        <p className="mb-2">Price: <strong>${products.ticketprice}</strong> per seat</p>
        <p className="mb-2">🎟️ Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
        <p className="mb-4 font-semibold">🧾 Total: ${(selectedSeats.length) * (products.ticketprice)}</p>
        <Link to = '/cart'>
        <button disabled={selectedSeats.length === 0} onClick = {handleConfirmBooking}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50">
        Confirm Booking
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SelectSeat;
