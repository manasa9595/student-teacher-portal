import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import AppLogo from "./AppLogo"; // adjust path if needed

export default function Toolbar({ userName }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md p-5 pl-15 flex justify-between items-center mb-6">
      <AppLogo />
      <nav className="flex items-center space-x-6 text-sm text-gray-700">
        <a href="/student" className="text-blue-600 hover:underline">
          Home
        </a>
        <a href="#" className="hover:text-blue-600 hover:underline">
          My Dashboard
        </a>
        <div className="flex items-center space-x-1 font-medium text-gray-800">
          <FiUser className="text-lg" />
          <span>{userName}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}
