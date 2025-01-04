import AddedPets from "../components/AddedPets";
import Footer from "../components/Footer";
import ShelterNavbar from "../components/ShelterNavbar";
import { PetProvider } from "../context/PetContext";
import { ShelterAuthProvider } from "../context/ShelterAuthContext";

const AddedPetsPage = () => {
  return (
    <ShelterAuthProvider>
      <PetProvider>
        <div className="h-[full]  w-[100%] bg-[#fff] ">
          <ShelterNavbar />
          <AddedPets />
          <Footer />
        </div>
      </PetProvider>
    </ShelterAuthProvider>
  );
};
export default AddedPetsPage;
