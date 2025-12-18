import { useState } from "react";
import api from "../../api/axios";

const TransferCard = ({ onSuccess }) => {
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState(null);
  const [verifying, setVerifying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔍 Verify recipient account number
  const verifyAccount = async (accountNumber) => {
    try {
      setVerifying(true);
      setError("");

      const res = await api.get(
        `/user/resolve/${accountNumber}`
      );

      setReceiver(res.data);
    } catch (err) {
      setReceiver(null);
    } finally {
      setVerifying(false);
    }
  };

  // 🔁 Handle transfer
  const handleTransfer = async (e) => {
    e.preventDefault();
    setError("");

    if (!toAccount || !amount || Number(amount) <= 0) {
      return setError("All fields are required");
    }

    if (!receiver) {
      return setError("Please verify recipient account");
    }

    try {
      setLoading(true);

      await api.post("/transactions/transfer", {
        toAccountNumber: toAccount.trim(),
        amount: Number(amount),
      });

      setToAccount("");
      setAmount("");
      setReceiver(null);

      onSuccess("Transfer successful");
    } catch (err) {
      setError(
        err.response?.data?.message || "Transfer failed"
      );
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

        {/* Recipient Account Number */}
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Recipient Account Number"
          value={toAccount}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setToAccount(value);

            if (value.length === 10) {
              verifyAccount(value);
            } else {
              setReceiver(null);
            }
          }}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Account verification feedback */}
        {verifying && (
          <p className="text-sm text-gray-500">
            Verifying account...
          </p>
        )}

        {receiver && !verifying && (
          <p className="text-sm text-green-600">
            Recipient: <strong>{receiver.fullName}</strong>
          </p>
        )}

        {!receiver && toAccount.length === 10 && !verifying && (
          <p className="text-sm text-red-500">
            Account not found
          </p>
        )}

        {/* Amount */}
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Info */}
        <p className="text-xs text-gray-500">
          Transfers can only be made to Toplipton Bank accounts.
        </p>

        {/* Submit */}
        <button
          disabled={loading || !receiver}
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
