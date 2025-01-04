import { useContext, useState } from "react";
import { PetContext } from "../context/PetContext";
import api from "../api/api";

const AddedPets = () => {
  const { pets, getPet } = useContext(PetContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const query = `search=${encodeURIComponent(searchTerm)}`;
    getPet(query);
  };

  const deletePet = async (petId) => {
    try {
      if (window.confirm("Are you sure you want to delete this pet?")) {
        await api.delete(`/pet/${petId}`); 
        getPet();
        alert("Pet deleted successfully!");
      }
    } catch (error) {
      alert("Failed to delete pet. Please try again.");
    }
  };

  return (
    <div>
     
      <div className="search-bar flex justify-center my-5">
        <input
          type="text"
          placeholder="Search by name, breed, size, or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none p-2 w-2/3 md:w-1/2 lg:w-1/3"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-[#B71C1C] text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

    
      <div className="max-w-[95%] p-10 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="card bg-[#F5F5F5] text-[#B71C1C] w-full shadow-xl"
          >
            <figure>
              <img
                src={pet.photos[0]}
                alt={pet.name}
                className="w-full h-64 object-contain rounded-t-md"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {pet.name}</h2>
              <h3 className="font-semibold">Breed: {pet.breed}</h3>
              <p>Description: {pet.description}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => deletePet(pet._id)} 
                  className="rounded-md bg-[#B71C1C] px-5 py-2.5 text-sm font-medium text-[#fff] shadow"
                >
                  Delete Pet
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddedPets;
