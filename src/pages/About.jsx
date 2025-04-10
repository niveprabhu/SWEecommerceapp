import React from 'react';
import { assets } from '../assets/assets'; // Adjust the path as needed

const About = () => {
  return (
    <div className="bg-red-700 py-12 rounded-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-4">
            Showtime: Movie Ticket Booking Platform
          </h1>
          <img
            src={assets.logo} // Use your logo here
            alt="Showtime Logo"
            className="mx-auto h-25 mb-4 rounded-lg" // Adjust size as needed
          />
        </header>

        {/* Introduction Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
          "Showtime" is a web-based application designed to streamline the process of purchasing movie tickets online.
          </p>
        </section>

        {/* Purpose Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Purpose of the Project 1
          </h2>
          <p className="text-gray-700 mb-4">
            The primary aim of these projects is to enhance our understanding of how sophisticated
            software systems are built using industry-standard technologies. By engaging in the
            development of a front-end interface and back-end integration, explore the
            critical processes of modern software development, testing, and deployment.
          </p>
        </section>

        {/* Front-End Development (Project #1) Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Front-End Development (Project #1)
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Concepts</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              Component-Based Architecture: Learn how modern UI is constructed using reusable
              components in React.
            </li>
            <li>
              State Management: Implement state handling techniques for dynamic user interfaces.
            </li>
            <li>
              Testing Fundamentals: Apply unit testing principles to ensure code quality and
              functionality.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Project Requirements</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Component Structure: Implement a minimum of 8 reusable React components.
            </li>
            <li>Routing and Navigation: Implement React Router with specified routes.</li>
            <li>State Management: Use appropriate state management techniques.</li>
            {/* ... other requirements ... */}
          </ul>
        </section>

        {/* Add more sections as needed, following the same structure */}

        {/* Footer (If not in App.jsx) */}
        {/* <footer className="text-center mt-12 py-4 border-t text-gray-500">
          <p>Showtime :: Your Name</p>
        </footer> */}
      </div>
    </div>
  );
};

export default About;