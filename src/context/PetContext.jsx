import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  
  const getPet = async (query = "") => {
    try {
      const res = await api.get(`/pet/?${query}`);
      setPets(res.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  useEffect(() => {
    getPet(); 
  }, []);

  return (
    <PetContext.Provider value={{ pets, getPet }}>
      {children}
    </PetContext.Provider>
  );
};
