import { useState } from "react";
import api from "../../api/axios";

const DepositCard = ({ onSuccess }) => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDeposit = async (e) => {
    e.preventDefault();
    setError("");

    if (!amount || amount <= 0) {
      return setError("Enter a valid amount");
    }

    try {
      setLoading(true);

      await api.post("/transactions/deposit", {
        amount: Number(amount),
      });

      setAmount("");
      onSuccess("Deposit successful"); // refresh dashboard data
    } catch (err) {
      setError(err.response?.data?.message || "Deposit failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Deposit Funds</h3>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <form onSubmit={handleDeposit} className="space-y-4">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          disabled={loading}
          className="
    w-full bg-green-600 text-white py-2 rounded-lg
    hover:bg-green-700
    active:scale-95
    transition
    cursor-pointer
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
        >
          {loading ? "Processing..." : "Deposit"}
        </button>
      </form>
    </div>
  );
};

export default DepositCard;
