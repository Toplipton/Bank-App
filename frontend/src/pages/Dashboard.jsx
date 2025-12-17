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

    // 🔥 Always bring feedback into view (mobile & desktop)
    window.scrollTo({ top: 0, behavior: "smooth" });

    fetchDashboardData();

    setTimeout(() => {
      setSuccessMessage("");
    }, 2500);
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
    <div className="min-h-screen bg-gray-100 md:flex">
      <Sidebar />

      <main className="flex-1 px-4 py-6 md:p-8 space-y-6 relative">

        {/* STICKY SUCCESS MESSAGE (Mobile-safe) */}
        {successMessage && (
          <div className="fixed md:static top-4 left-1/2 -translate-x-1/2 md:translate-x-0 z-50 bg-green-100 text-green-700 px-4 py-3 rounded shadow">
            {successMessage}
          </div>
        )}

        {/*  MOBILE HEADER (VISIBLE IMMEDIATELY) */}
        <div className="md:hidden bg-white rounded-xl shadow p-4 space-y-1">
          <h2 className="text-lg font-bold text-emerald-700">
            Toplipton Bank
          </h2>
          <p className="text-sm text-gray-600">
            Welcome, {user.fullName}
          </p>
          <p className="text-xl font-semibold">
            ₦{user.balance.toLocaleString()}
          </p>
        </div>

        {/* ✅ MOBILE ATM / BALANCE CARD */}
        <div className="md:hidden">
          <BalanceCard balance={user.balance} />
        </div>

        {/* ✅ MOBILE PROFILE CARD */}
        <div className="md:hidden">
          <ProfileCard user={user} />
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Desktop Profile */}
          <div className="hidden md:block">
            <ProfileCard user={user} />
          </div>

          {/* Desktop Right Section */}
          <div className="lg:col-span-2 space-y-6">

            {/* Desktop Balance */}
            <div className="hidden md:block">
              <BalanceCard balance={user.balance} />
            </div>

            {/* Actions */}
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
  );
};

export default Dashboard;
