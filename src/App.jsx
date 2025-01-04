import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShelterAuthProvider } from "./context/ShelterAuthContext";
import LoginUser from "./auth/user/LoginUser";
import RegisterUser from "./auth/user/RegisterUser";
import PrivateRoute from "./routes/PrivateRoute";
import HomePage from "./pages/HomePage";
import ShelterLogin from "./auth/shelter/ShelterLogin";
import ShelterRegister from "./auth/shelter/ShelterRegister";
import ShelterPrivateRoute from "./routes/ShelterPrivateRoute";
import AddPet from "./pages/AddPet";
import PetDetailsPage from "./pages/PetDetailsPage";
import UserPage from "./pages/UserPage";
import ApplicationPage from "./pages/ApplicationPage";
import ShelterPage from "./pages/ShelterPage";
import AddedPets from "./components/AddedPets";
import AddedPetsPage from "./pages/AddedPetsPage";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ShelterAuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route index path="/login" element={<LoginUser />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/shelterlogin" element={<ShelterLogin />} />
            <Route path="/shelterregister" element={<ShelterRegister />} />
            <Route
              path="/application"
              element={
                <PrivateRoute>
                  <ApplicationPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/shelter"
              element={
                <ShelterPrivateRoute>
                  <ShelterPage />
                </ShelterPrivateRoute>
              }
            />
            <Route
              path="/addedpets"
              element={
                <ShelterPrivateRoute>
                  <AddedPetsPage />
                </ShelterPrivateRoute>
              }
            />
            <Route
              path="/pet/:id"
              element={
                <PrivateRoute>
                  <PetDetailsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/addpet"
              element={
                <ShelterPrivateRoute>
                  <AddPet />
                </ShelterPrivateRoute>
              }
            />
          </Routes>
        </ShelterAuthProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
