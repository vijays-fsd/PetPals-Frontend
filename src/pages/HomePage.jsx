import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import PetCard from "../components/PetCard";
import { AuthProvider } from "../context/AuthContext";
import { PetProvider } from "../context/PetContext";


const HomePage = () => {
  return (
    <AuthProvider>
      <PetProvider>
        <div className="h-[full]  w-[100%] bg-[#fff] ">
          <Navbar />
          <HeroBanner />
          <PetCard />
          <Footer />
        </div>
      </PetProvider>
    </AuthProvider>
  );
};
export default HomePage;
