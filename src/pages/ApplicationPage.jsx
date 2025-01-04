import Application from "../components/Application"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const ApplicationPage = () => {
  return (
    <div  className="h-[full]  w-[100%] bg-[#fff] ">
        <Navbar />
        <Application />
        <Footer />
    </div>
  )
}
export default ApplicationPage