import { useState } from "react";
import api, { setAuthToken } from "../services/api";
import { useNavigate, Link } from "react-router";

export default function Register({ onAuth }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await api.post("/auth/register", form);
      const token = res.data.token;
      setAuthToken(token);
      onAuth && onAuth(token);
      navigate("/tasks");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        User Registration
      </h2>

      {error && <div className="text-red-600 mb-3">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Create password"
          type="password"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
        />
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg shadow">
          Create account
        </button>
      </form>
      <div className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600">
          Login
        </Link>
      </div>
    </div>
  );
}
