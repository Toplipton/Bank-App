import { useState } from "react";
import api from "../../api/axios";

const TransferCard = ({ onSuccess }) => {
  const [amount, setAmount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTransfer = async (e) => {
  e.preventDefault();
  setError("");

  if (!amount || amount <= 0 || !toAccount) {
    return setError("All fields are required");
  }

  try {
    setLoading(true);

    await api.post("/transactions/transfer", {
      amount: Number(amount),
      toAccountNumber: toAccount.trim(),
    });

    setAmount("");
    setToAccount("");
    onSuccess("Transfer successful");
  } catch (err) {
    setError(err.response?.data?.message || "Transfer failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">
        Transfer Funds
      </h3>

      {error && (
        <p className="text-red-500 text-sm mb-2">
          {error}
        </p>
      )}

      <form onSubmit={handleTransfer} className="space-y-4">

        {/* Recipient Account */}
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Recipient Account Number"
          value={toAccount}
          onChange={(e) =>
            setToAccount(e.target.value.replace(/\D/g, ""))
          }
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Amount */}
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          disabled={loading}
          className="
            w-full bg-blue-600 text-white py-2 rounded-lg
            hover:bg-blue-700
            active:scale-95
            transition
            cursor-pointer
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >
          {loading ? "Processing..." : "Transfer"}
        </button>
      </form>
    </div>
  );
};

export default TransferCard;
