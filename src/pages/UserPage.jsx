import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserDetails from "./UserDetails";

const UserPage = () => {
  return (
    <div className="h-[full] w-[100%] bg-[#fff] ">
      <>
        <>
          <Navbar />
          <UserDetails />
          <Footer />
        </>
      </>
    </div>
  );
};
export default UserPage;
