import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ShelterAuthContext } from "../context/ShelterAuthContext";

const ShelterPrivateRoute = ({ children }) => {
  const { shelter, authLoading } = useContext(ShelterAuthContext);

  if (authLoading) {
    return (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <span className="loading loading-infinity loading-lg text-[green]"></span>
      </div>
    );
  }

  if (!shelter) {
    return <Navigate to="/shelterlogin" />;
  }

  return children;
};
export default ShelterPrivateRoute;
