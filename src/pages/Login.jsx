import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // adjust path if needed
import { useNavigate } from "react-router-dom";
import AppLogo from "../components/AppLogo"; // adjust path if needed

export default function Login() {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    setErrorMsg("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // ✅ Redirect to /student (or /teacher later)
      navigate("/student");
    } catch (error) {
      setErrorMsg("Login failed: " + error.message);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-40 z-0"
        style={{ backgroundImage: "url('src/assets/login-bg.png')" }}
      ></div>

      <div className="relative z-10">
        <div className="w-full flex justify-center mt-6">
          <AppLogo />
        </div>

        <div className="flex justify-center items-center mt-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-20 pt-10 rounded-md shadow-md w-96"
          >
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-blue-400 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Student</option>
              <option>Teacher</option>
            </select>

            <input
              type="email"
              placeholder="ID/Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-blue-400 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-blue-400 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {errorMsg && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-500 text-white font-semibold py-2 rounded transition-colors ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
