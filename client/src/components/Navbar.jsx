import { Link } from "react-router";

export default function Navbar({ token, onLogout }) {
  return (
    <header role="banner" className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-fluid flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Task<span className="text-gray-700">Manager</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 lg:gap-8">
          {!token ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm rounded-md border border-transparent hover:border-gray-200 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
