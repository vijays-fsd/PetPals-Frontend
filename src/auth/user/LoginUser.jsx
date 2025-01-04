import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Header";

const LoginUser = () => {
  const { loginUser, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await loginUser(email, password);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="h-[100vh] w-[100%] bg-[#fff]">
        <Header />
        <div className="mt-14">
          <div>
            <section className="max-w-lg p-6 mx-auto bg-white rounded-md shadow-md">
              <h2 className="text-lg font-semibold text-[#B71C1C] capitalize text-center">
                Sign in as Adopter
              </h2>

              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-4 mt-4">
                  <div>
                    <label
                      className="text-[#B71C1C] font-medium"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:ring-opacity-40 focus:outline-none focus:ring"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="text-[#B71C1C] font-medium"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:ring-opacity-40 focus:outline-none focus:ring"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button
                    type="submit"
                    className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D32F2F] rounded-md hover:bg-[#B71C1C] focus:outline-none focus:bg-[#B71C1C]"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>

                  <Link
                    to="/register"
                    className="text-sm text-[#B71C1C] underline hover:text-[#D32F2F] transition-colors"
                  >
                    Create New User
                  </Link>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
