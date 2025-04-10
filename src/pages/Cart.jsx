import React from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const { state } = useLocation();

  if (!state) return <div className="p-10 text-center">No booking data available.</div>;

  const { movie, selectedSeats, subtotal } = state;
  const onlineFee = 4.99;
  const tax = 3.99;
  const total = subtotal + onlineFee + tax;

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Your Booking Summary</h2>
        
        <img src={movie.image[0]} alt={movie.name} className="w-full h-64 object-cover rounded mb-4" />
        
        <h3 className="text-xl font-semibold">{movie.name}</h3>
        <p className="mb-2 text-sm">{movie.Description}</p>

        <p className="mt-4">🎟️ <strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
        <p>💵 <strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p>🛒 <strong>Online Fee:</strong> ${onlineFee}</p>
        <p>🧾 <strong>Tax:</strong> ${tax}</p>

        <hr className="my-3 border-gray-400" />

        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>

        <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
