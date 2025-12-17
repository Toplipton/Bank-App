import { useEffect, useState } from "react";
import api from "../api/axios";

import Sidebar from "../components/dashboard/Sidebar";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await api.get("/transactions");
        setTransactions(res.data);
      } catch (err) {
        setError("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Transaction History</h1>

        {loading && <p>Loading transactions...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && transactions.length === 0 && <p>No transactions yet.</p>}

        {!loading && transactions.length > 0 && (
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx._id} className="border-t">
                    <td className="px-4 py-3 capitalize">{tx.type}</td>

                    <td
                      className={`px-4 py-3 font-medium ${
                        tx.type === "deposit"
                          ? "text-green-600"
                          : tx.type === "withdrawal"
                          ? "text-red-600"
                          : "text-blue-600"
                      }`}
                    >
                      ₦{tx.amount.toLocaleString()}
                    </td>

                    <td className="px-4 py-3 capitalize">{tx.status}</td>

                    <td className="px-4 py-3 text-sm text-gray-600">
                      {new Date(tx.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
