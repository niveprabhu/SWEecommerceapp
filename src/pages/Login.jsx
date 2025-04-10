import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Start with Sign In
  const [formData, setFormData] = useState({
    username: '', // For Sign In
    password: '', // For Sign In
    firstName: '', // For Sign Up
    lastName: '', // For Sign Up
    email: '', // For Sign Up
    confirmPassword: '', // For Sign Up
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (isSignIn) {
      if (!formData.username.trim()) errors.username = 'Username is required';
      if (!formData.password.trim()) errors.password = 'Password is required';
    } else {
      if (!formData.firstName.trim()) errors.firstName = 'First name is required';
      if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
      if (!formData.email.trim()) errors.email = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Invalid email format';
      if (!formData.password.trim()) errors.password = 'Password is required';
      if (!formData.confirmPassword.trim()) errors.confirmPassword = 'Confirm password is required';
      else if (formData.password !== formData.confirmPassword)
        errors.confirmPassword = 'Passwords do not match';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login Data:', formData); // Simulate Login - log data
      alert(`${isSignIn ? 'Sign In' : 'Sign Up'} successful!`);
      navigate('/'); // Navigate to Home
    }
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setFormErrors({}); // Clear errors when switching modes
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-8">
            <div className="flex justify-center mb-4">
              <img src={assets.logo} alt="Logo" className="h-20" /> {/* Adjust size as needed */}
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </h2>
            <form onSubmit={handleSubmit} className="mt-4">
              {/* Sign In Fields */}
              {isSignIn && (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    {formErrors.username && (
                      <p className="text-red-500 text-xs italic">{formErrors.username}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {formErrors.password && (
                      <p className="text-red-500 text-xs italic">{formErrors.password}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Sign Up Fields */}
              {!isSignIn && (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-xs italic">{formErrors.firstName}</p>
                    )}
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
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-xs italic">{formErrors.lastName}</p>
                    )}
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
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs italic">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {formErrors.password && (
                      <p className="text-red-500 text-xs italic">{formErrors.password}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {formErrors.confirmPassword && (
                      <p className="text-red-500 text-xs italic">{formErrors.confirmPassword}</p>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <button
                  className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {isSignIn ? 'Sign In' : 'Sign Up'}
                </button>
                <button
                  type="button"
                  className="inline-block align-baseline font-bold text-sm text-red-700 hover:text-red-800"
                  onClick={toggleMode}
                >
                  {isSignIn ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;