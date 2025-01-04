import AddPetForm from "../components/AddPetForm";
import Footer from "../components/Footer";
import ShelterNavbar from "../components/ShelterNavbar";


const AddPet = () => {
  return (
    <div className="h-[full]  w-[100%] bg-[#fff] ">
      <ShelterNavbar />
      <AddPetForm />
      <Footer />
    </div>
  );
};
export default AddPet;
