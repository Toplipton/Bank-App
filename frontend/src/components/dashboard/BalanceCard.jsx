const BalanceCard = ({ balance }) => {
  return (
    <div className="bg-emerald-100 rounded-xl p-6 shadow">
      <p className="text-gray-600">Main Account</p>
      <p className="text-2xl font-bold text-emerald-700 mt-2">
        ₦{Number(balance).toLocaleString()}
      </p>
    </div>
  );
};

export default BalanceCard;
