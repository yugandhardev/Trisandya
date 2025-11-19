import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";
import { setAuthToken } from "./services/api";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    setAuthToken(null);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar token={token} onLogout={handleLogout} />
        <main className="container-fluid py-8">
          <Routes>
            <Route
              path="/"
              element={
                token ? (
                  <Navigate to="/tasks" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/register"
              element={<Register onAuth={(t) => setToken(t)} />}
            />
            <Route
              path="/login"
              element={<Login onAuth={(t) => setToken(t)} />}
            />
            <Route
              path="/tasks"
              element={token ? <Tasks /> : <Navigate to="/login" replace />}
            />
            <Route
              path="*"
              element={
                <div>
                  Not found — <Link to="/">Go Home</Link>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
