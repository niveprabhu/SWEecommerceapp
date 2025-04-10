import React from 'react';
import { assets } from '../assets/assets'; // Adjust path if necessary

const About = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Showtime: Movie Ticket Booking Platform</h1>
      {assets.logo && <img className="mb-4" src={assets.logo} alt="Showtime Logo" />}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Showtime is a web-based application designed to streamline the process of purchasing movie tickets online. It provides users with an interface to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <p>
              Browse a comprehensive catalog of movies: Users can explore currently playing and upcoming films,
              complete with essential details like titles, posters, descriptions, and ratings or reviews.
            </p>
          </li>
          <li>
            <p>
              Access showtime information: The platform offers listings of available movies at theaters,
              including release dates and director information, allowing users to select convenient showtimes.
            </p>
          </li>
          <li>
            <p>
              Visually select seating arrangements: Showtime incorporates an interactive seat selection feature,
              enabling users to choose their preferred seats within a theater's seating chart.
            </p>
          </li>
          <li>
            <p>
              Manage bookings and transactions: Users can add selected tickets to a virtual cart, review their
              order, and proceed through a checkout process that includes taxes and online fees.
            </p>
          </li>
          <li>
            <p>
              Manage user authentication and profiles: The system includes user authentication features
              (login/registration) to manage user accounts, booking history, and profile information.
            </p>
          </li>
          <li>
            <p>
              Search and filter movies: Showtime allows users to efficiently find movies of interest using
              search functionality and filtering options based on criteria such as heroes, directors, release dates,
              or movie names.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Platform Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <p>User-centered design: Creating an intuitive and user-friendly experience for effortless movie ticket booking.</p>
          </li>
          <li>
            <p>Component-based architecture: Utilizing reusable React components to build a modular and maintainable front-end.</p>
          </li>
          <li>
            <p>State management: Efficiently handling data and user interactions within the application.</p>
          </li>
          <li>
            <p>Responsive design: Ensuring the platform is accessible and functional across various devices (desktops, tablets, and mobile phones).</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About