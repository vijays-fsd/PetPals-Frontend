import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true); 
  const navigate = useNavigate();

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setAuthLoading(false); 
  }, []);

  const createUser = async (username, email, password) => {
    setLoading(true);
    try {
      const res = await api.post(
        "user/",
        { username, email, password },
        { withCredentials: true }
      );

      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/");
    } catch (error) {
      console.error(`Error message is ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.post(
        "/user/auth",
        { email, password },
        { withCredentials: true }
      );

      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/");
    } catch (error) {
      console.error(`Error message is ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      await api.post("/user/logout", {}, { withCredentials: true });
      setUser(null);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error(`Error message is ${error}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        navigate,
        createUser,
        loginUser,
        logoutUser,
        loading,
        authLoading, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
