import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { ShelterAuthContext } from "../../context/ShelterAuthContext";

const ShelterLogin = () => {
  const { loginShelterUser, loading } = useContext(ShelterAuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await loginShelterUser(email, password); 
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-[100vh] w-[100%] bg-[#fff]">
      <Header />
      <div className="mt-14">
        <section className="max-w-lg p-6 mx-auto bg-white rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-[#B71C1C] capitalize text-center">
            Sign in as Shelter
          </h2>

          {error && (
            <p className="mt-2 text-center text-sm text-red-600">{error}</p>
          )}

          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4 mt-4">
              {/* Email Address */}
              <div>
                <label
                  className="text-[#B71C1C] font-medium"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="text-[#B71C1C] font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
            </div>

            {/* Login Button */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md focus:outline-none ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#D32F2F] hover:bg-[#B71C1C]"
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Register Shelter */}
              <Link
                to="/shelterregister"
                className="text-sm text-[#B71C1C] underline hover:text-[#D32F2F] transition-colors"
              >
                Register Your Shelter
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ShelterLogin;
