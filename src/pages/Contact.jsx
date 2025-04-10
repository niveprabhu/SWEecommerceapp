import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveContactData } from '../assets/assets'; // Import the array

const Contact = () => {
  const [feedbackData, setFeedbackData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    orderNumber: '',
    feedbackType: 'General Feedback',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!feedbackData.firstName.trim()) errors.firstName = 'First name is required';
    if (!feedbackData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!feedbackData.email.trim()) errors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(feedbackData.email)) errors.email = 'Invalid email format';
    if (!feedbackData.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      //   const mailtoLink = `...`; // mailto: code (if you want it)
      //   window.location.href = mailtoLink;

      try {
        saveContactData.push({ ...feedbackData }); // Add a copy to avoid mutation
        console.log('Feedback saved:', saveContactData); // Log the array
        alert('Feedback submitted successfully!');
        navigate('/');
      } catch (error) {
        console.error('Error saving feedback:', error);
        alert('Failed to submit feedback. Please try again.');
      }
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-8">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Feedback / Complaint Form
            </h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={feedbackData.firstName}
                  onChange={handleChange}
                />
                {formErrors.firstName && <p className="text-red-500 text-xs italic">{formErrors.firstName}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={feedbackData.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName && <p className="text-red-500 text-xs italic">{formErrors.lastName}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  value={feedbackData.email}
                  onChange={handleChange}
                />
                {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderNumber">
                  Order Number (Optional)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="orderNumber"
                  type="text"
                  name="orderNumber"
                  value={feedbackData.orderNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedbackType">
                  Feedback Type
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="feedbackType"
                  name="feedbackType"
                  value={feedbackData.feedbackType}
                  onChange={handleChange}
                >
                  <option value="General Feedback">General Feedback</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Suggestion">Suggestion</option>
                  <option value="Problem Report">Problem Report</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  rows="5"
                  value={feedbackData.message}
                  onChange={handleChange}
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-xs italic">{formErrors.message}</p>}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;