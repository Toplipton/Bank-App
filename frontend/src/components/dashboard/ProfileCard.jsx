const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <img
        src={
          user.avatar ||
          "https://ui-avatars.com/api/?name=" +
            encodeURIComponent(user.fullName)
        }
        alt="Profile"
        className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
      />

      <h3 className="text-xl font-bold">{user.fullName}</h3>
      <p className="text-gray-500">{user.email}</p>

      <div className="mt-4 text-sm space-y-2 text-gray-600">
        <p>
          <strong>Account:</strong> {user.accountNumber}
        </p>
        <p>
          <strong>Role:</strong> {user.role || "User"}
        </p>
      </div>

      <button
        onClick={() =>
          alert("Password reset feature will be available in a future update.")
        }
        className="
    mt-6 bg-emerald-600 text-white px-6 py-2 rounded-lg
    hover:bg-emerald-700 active:scale-95 transition cursor-pointer
  "
      >
        Reset Password
      </button>
    </div>
  );
};

export default ProfileCard;
