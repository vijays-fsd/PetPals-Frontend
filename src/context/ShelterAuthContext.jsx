import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import axios from "axios";

export const ShelterAuthContext = createContext();

export const ShelterAuthProvider = ({ children }) => {
  const [shelter, setShelter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedShelter = localStorage.getItem("shelterUser");
    if (storedShelter) {
      setShelter(JSON.parse(storedShelter));
    }
    setAuthLoading(false);
  }, []);

  const createShelter = async (username, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(
        "https://petpalsbackend-48yj.onrender.com/api/v1/shelteruser/",
        { username, email, password },
        { withCredentials: true }
      );
      setShelter(res.data);
      localStorage.setItem("shelterUser", JSON.stringify(res.data));
      navigate("/addpet");
    } catch (error) {
      console.error(`Error message is ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loginShelterUser = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post(
        "shelteruser/auth",
        { email, password },
        { withCredentials: true }
      );
      setShelter(res.data);
      console.log(res.data);
      localStorage.setItem("shelterUser", JSON.stringify(res.data));
      navigate("/addpet");
    } catch (error) {
      console.error(`Login error: ${error.message}`);
      setError("Login failed. Please check your credentials and try again.");
      user;
    } finally {
      setLoading(false);
    }
  };

  const logoutShelterUser = async () => {
    try {
      await api.post("/shelteruser/logout", {}, { withCredentials: true });
      setShelter(null);
      localStorage.removeItem("shelterUser");
      navigate("/");
    } catch (error) {
      console.error(`Logout error: ${error.message}`);
      setError("Logout failed. Please try again later.");
    }
  };

  return (
    <ShelterAuthContext.Provider
      value={{
        shelter,
        navigate,
        createShelter,
        loginShelterUser,
        logoutShelterUser,
        loading,
        authLoading,
        error,
      }}
    >
      {children}
    </ShelterAuthContext.Provider>
  );
};
