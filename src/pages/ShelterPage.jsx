import Footer from "../components/Footer";
import ShelterNavbar from "../components/ShelterNavbar";
import ShelterDetails from "./ShelterDetails";

const ShelterPage = () => {
  return (
    <div  className="h-[full] w-[100%] bg-[#fff] ">
      <ShelterNavbar />
      <ShelterDetails />
      <Footer />
    </div>
  );
};
export default ShelterPage;
