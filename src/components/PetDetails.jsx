import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/api";

const PetDetails = () => {
  const { id } = useParams();
  const petId = id;
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const getPetDetails = async () => {
      try {
        const res = await api.get(`/pet/${id}`);
        setPet(res.data);
      } catch (error) {
        console.error("Error fetching pet details:", error);
        navigate("/"); // Redirect to home if pet not found
      }
    };

    getPetDetails();
  }, [id, navigate]);

  if (!pet) return <div>Loading...</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-10">
      <div className="bg-[#F5F5F5] p-8 shadow-xl rounded-md">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Pet Image */}
          <div className="w-full lg:w-1/3">
            <img src={pet.photos[0]} alt={pet.name} className="w-full rounded-md" />
          </div>
          {/* Pet Details */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl text-[#B71C1C] font-bold mb-4">{pet.name}</h1>
            <p className="text-lg text-[#000] mb-4">{pet.description}</p>
            <p className="text-md text-[#000] mb-2"><strong className="text-[#B71C1C]">Age:</strong> {pet.age} years</p>
            <p className="text-md text-[#000] mb-2"><strong className="text-[#B71C1C]">Breed:</strong> {pet.breed}</p>
            <p className="text-md text-[#000] mb-2"><strong className="text-[#B71C1C]">Size:</strong> {pet.size}</p>
            <p className="text-md text-[#000] mb-2"><strong className="text-[#B71C1C]">Color:</strong> {pet.color}</p>
            <p className="text-md text-[#000] mb-2"><strong className="text-[#B71C1C]">Gender:</strong> {pet.gender}</p>
            <p className="text-md text-[#000] mb-2"><strong className="text-[#B71C1C]">Location:</strong> {pet.location}</p>
            <p className="text-md text-[#000] mb-2"><strong className="text-[#B71C1C]">Medical History:</strong> {pet.medicalHistory}</p>
            <p className="text-md text-[#000] mb-2"><strong className="text-[#B71C1C]">Adoption Status:</strong> {pet.adoptionStatus}</p>

            <div className="mt-8">
              <Link to="/application" state={{petId}} className="bg-[#B71C1C] text-white px-6 py-3 rounded-md shadow-md">
                Adopt {pet.name}
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
