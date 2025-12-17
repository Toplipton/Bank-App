import { useEffect, useState } from "react";
import api from "../api/axios";

import Sidebar from "../components/dashboard/Sidebar";
import ProfileCard from "../components/dashboard/ProfileCard";
import BalanceCard from "../components/dashboard/BalanceCard";
import TransactionsPreview from "../components/dashboard/TransactionsPreview";
import DepositCard from "../components/dashboard/DepositCard";
import WithdrawCard from "../components/dashboard/WithdrawCard";
import TransferCard from "../components/dashboard/TransferCard";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const fetchDashboardData = async () => {
    try {
      const userRes = await api.get("/user/dashboard");
      const txRes = await api.get("/transactions");

      setUser(userRes.data.user);
      setTransactions(txRes.data || []);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSuccess = (message) => {
    setSuccessMessage(message);
    fetchDashboardData();

    setTimeout(() => setSuccessMessage(""), 2000);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load dashboard
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="md:flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 px-4 py-6 md:p-8 space-y-6">
          {successMessage && (
            <div className="bg-green-100 text-green-700 px-4 py-3 rounded">
              {successMessage}
            </div>
          )}

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ProfileCard user={user} />

            <div className="lg:col-span-2 space-y-6">
              <BalanceCard balance={user.balance} />

              {/* Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DepositCard onSuccess={handleSuccess} />
                <WithdrawCard onSuccess={handleSuccess} />
                <TransferCard onSuccess={handleSuccess} />
              </div>
            </div>
          </div>

          {/* Transactions */}
          <TransactionsPreview transactions={transactions} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
