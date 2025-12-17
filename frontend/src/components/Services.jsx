const Services = () => {
  const services = [
    {
      icon: "💰",
      title: "Instant Deposits",
      desc: "Fund your account instantly and track your balance in real time.",
    },
    {
      icon: "🏧",
      title: "Secure Withdrawals",
      desc: "Withdraw funds safely with full transaction records.",
    },
    {
      icon: "🔁",
      title: "Fast Transfers",
      desc: "Send money to other Toplipton Bank users seamlessly.",
    },
    {
      icon: "📊",
      title: "Transaction History",
      desc: "View all your deposits, withdrawals, and transfers in one place.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Banking Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Everything you need to manage your money securely and efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
