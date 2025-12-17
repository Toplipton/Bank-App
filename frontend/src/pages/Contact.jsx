import { Link } from "react-router-dom";
import profilePic from "../assets/Temitope.jpg.jpeg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-emerald-700 text-center mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Let’s build impactful, scalable web applications together.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Section */}
          <div className="text-center">
            <img
              src={profilePic}
              alt="Ajala Temitope Oluwafemi"
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow"
            />
            <h2 className="text-2xl font-semibold">Ajala Temitope Oluwafemi</h2>
            <p className="text-gray-600">Full-Stack MERN Developer</p>
          </div>

          {/* Contact Info */}
          <div>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:temitopeoluwafemi95@gmail.com"
                  className="text-emerald-600 hover:underline"
                >
                  temitopeoluwafemi95@gmail.com
                </a>
              </li>

              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+2348106804265"
                  className="text-emerald-600 hover:underline"
                >
                  +234 810 680 4265
                </a>
              </li>

              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Toplipton"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  github.com/Toplipton
                </a>
              </li>
            </ul>

            <p className="text-gray-700 mt-6 leading-relaxed">
              I specialize in building complete web solutions using the MERN
              stack, focusing on performance, security, and clean user
              experiences.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block text-emerald-600 hover:underline text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
