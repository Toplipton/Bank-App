const TransactionsPreview = ({ transactions }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-sm">No transactions yet.</p>
      ) : (
        <div className="space-y-3">
          {transactions.slice(0, 5).map((tx) => (
            <div
              key={tx._id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium capitalize">{tx.type}</p>
                <p className="text-xs text-gray-500">
                  {new Date(tx.createdAt).toLocaleString()}
                </p>
              </div>

              <p
                className={`font-semibold ${
                  tx.type === "deposit" ? "text-green-600" : "text-red-600"
                }`}
              >
                ₦{tx.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionsPreview;
