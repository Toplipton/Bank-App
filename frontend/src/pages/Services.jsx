import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-10 text-center">
          What I Offer
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-700">
              Building responsive, accessible, and modern user interfaces using
              React, Tailwind CSS, and component-driven architecture.
            </p>
          </div>

          {/* Backend */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-700">
              Designing RESTful APIs with Node.js and Express, implementing
              authentication, authorization, and secure business logic.
            </p>
          </div>

          {/* Database */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Database & Integration
            </h3>
            <p className="text-gray-700">
              Working with MongoDB for data modeling, persistence, and seamless
              frontend-backend integration in MERN applications.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-emerald-50 p-6 rounded-xl text-center">
          <p className="text-gray-700">
            This project demonstrates a complete <strong>MERN stack</strong>{" "}
            workflow — from authentication and protected routes to transaction
            handling and polished UI.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-block text-emerald-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
