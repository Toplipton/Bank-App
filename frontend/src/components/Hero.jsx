import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-emerald-700 font-semibold mb-3">Toplipton Bank</p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Experience hassle-free <br /> digital banking
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg">
            Manage your money securely with fast transfers, instant deposits,
            and real-time transaction tracking — all in one place.
          </p>

          <div className="mt-8 flex space-x-4">
            <Link
              to="/register"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
            >
              Get Started
            </Link>

            <Link
              to="/learn-more"
              className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-100 transition cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT (CARDS) */}

        <div className="relative hidden md:block">
          {/* TOP CARD */}
          <div className="absolute top-0 left-16 w-80 h-48 bg-emerald-600 rounded-2xl shadow-2xl p-5 text-white transform rotate-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Toplipton Bank</span>
              <span className="text-sm">Debit</span>
            </div>

            <div className="mt-8 tracking-widest text-lg">
              1234 5678 9012 3456
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-xs uppercase opacity-80">Card Holder</p>
                <p className="font-semibold">AJALA TEMITOPE</p>
              </div>

              {/* Mastercard Logo */}
              <div className="flex">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full -ml-3"></div>
              </div>
            </div>
          </div>

          {/* BOTTOM CARD */}
          <div className="absolute top-24 left-0 w-80 h-48 bg-purple-700 rounded-2xl shadow-2xl p-5 text-white transform -rotate-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Toplipton Bank</span>
              <span className="text-sm">Debit</span>
            </div>

            <div className="mt-8 tracking-widest text-lg">
              9876 5432 1098 7654
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-xs uppercase opacity-80">Card Holder</p>
                <p className="font-semibold">AJALA TEMITOPE</p>
              </div>

              {/* Mastercard Logo */}
              <div className="flex">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full -ml-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
