import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow">
        <h1 className="text-4xl font-bold text-emerald-700 mb-6">
          About Toplipton Bank
        </h1>

        <p className="text-gray-700 leading-relaxed">
          Toplipton Bank is a modern digital banking platform designed to
          provide users with secure, fast, and convenient access to essential
          banking services.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Our mission is to simplify everyday financial transactions through
          intuitive design, transparency, and reliable technology. Users can
          manage accounts, perform transfers, and track transaction history with
          ease.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Toplipton Bank emphasizes user experience, data security, and
          accessibility, ensuring a smooth and trustworthy digital banking
          experience.
        </p>

        {/* Subtle technical note */}
        <div className="mt-8 bg-emerald-50 p-6 rounded-xl">
          <p className="text-gray-700 text-sm">
            <strong>Note:</strong> This application is a demonstration project
            built using the MERN stack (MongoDB, Express, React, and Node.js) to
            showcase modern full-stack web development practices.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block mt-8 text-emerald-600 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
