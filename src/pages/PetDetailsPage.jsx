import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PetDetails from "../components/PetDetails"
import ReviewComponent from "../components/ReviewComponent"

const PetDetailsPage = () => {
  return (
    <div className="h-[full] w-[100%] bg-[#fff] ">
        <Navbar />
        <div>
            <PetDetails />
            <ReviewComponent />
        </div>
        <Footer />
    </div>
  )
}
export default PetDetailsPage