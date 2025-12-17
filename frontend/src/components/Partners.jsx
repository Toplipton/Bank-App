const Partners = () => {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Supported by trusted financial partners
        </h3>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
          {/* Mastercard */}
          <div className="flex items-center space-x-2 text-xl font-semibold text-gray-700">
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-400 rounded-full -ml-2"></div>
            <span className="ml-2">Mastercard</span>
          </div>

          {/* Visa */}
          <div className="text-xl font-bold text-blue-700">VISA</div>

          {/* PayPal */}
          <div className="text-xl font-semibold text-blue-500">PayPal</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
