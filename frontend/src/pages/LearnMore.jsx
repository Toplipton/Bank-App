import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-emerald-600 mb-6">
          Learn More About Toplipton Bank
        </h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg">What is Toplipton Bank?</h3>
            <p className="mt-1">
              Toplipton Bank is a demo banking application built to demonstrate
              secure authentication, account management, and transaction
              handling using modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">What can users do?</h3>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Create and manage an account</li>
              <li>Deposit, withdraw, and transfer funds</li>
              <li>View transaction history</li>
              <li>Access a protected dashboard</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Is this a real bank?</h3>
            <p className="mt-1">
              No. This project is for learning and demonstration purposes only
              and does not handle real money.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block text-emerald-600 hover:underline hover:text-emerald-700 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
