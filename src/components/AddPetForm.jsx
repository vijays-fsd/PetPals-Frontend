import React, { useState } from "react";
import { storage, getDownloadURL, ref, uploadBytes } from "../../firebase";
import api from "../api/api";

const AddPetForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    size: "",
    color: "",
    gender: "",
    location: "",
    medicalHistory: "",
    description: "",
    photos: "", 
    videos: "",
    adoptionStatus: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `pets/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setFormData({
          ...formData,
          photos: downloadURL, 
        });
        console.log("Image uploaded successfully. URL:", downloadURL);
      }).catch((error) => {
        setError("Error getting image URL: " + error.message);
      });
    }).catch((error) => {
      setError("Error uploading image: " + error.message);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data:", formData);
      const response = await api.post("/pet/addpet", formData, { withCredentials: true });
      setMessage("Pet added successfully!");
      setFormData({
        name: "",
        age: "",
        breed: "",
        size: "",
        color: "",
        gender: "",
        location: "",
        medicalHistory: "",
        description: "",
        photos: "",  
        videos: "",
        adoptionStatus: "",
      });
    } catch (err) {
      console.error("Failed to add pet:", err);
      setError("Failed to add pet: " + err.message);
    }
  };

  return (
    <div className="add-pet-form w-[50%] mx-auto my-5 ">
      <h2 className="text-center text-[#B71C1C]">Add New Pet</h2>
      {message && <div className="success-message bg-[#FFCDD2] text-[#D32F2F] p-4 rounded-md">{message}</div>}
      {error && <div className="error-message bg-[#FFCDD2] text-[#B71C1C] p-4 rounded-md">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-[#D32F2F]">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="text-[#D32F2F]">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="breed" className="text-[#D32F2F]">Breed:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="size" className="text-[#D32F2F]">Size: Small/Medium/Large</label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="color" className="text-[#D32F2F]">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="gender" className="text-[#D32F2F]">Gender: Male/Female</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="text-[#D32F2F]">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="medicalHistory" className="text-[#D32F2F]">Medical History:</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="text-[#D32F2F]">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="photos" className="text-[#D32F2F]">Photos:</label>
          <input
            type="file"
            id="photos"
            name="photos"
            onChange={handleImageUpload}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        {/* <div>
          <label htmlFor="videos" className="text-[#D32F2F]">Videos:</label>
          <input
            type="text"
            id="videos"
            name="videos"
            value={formData.videos}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
          />
        </div> */}
        <div>
          <label htmlFor="adoptionStatus" className="text-[#D32F2F]">Adoption Status: Available/Adopted</label>
          <input
            type="text"
            id="adoptionStatus"
            name="adoptionStatus"
            value={formData.adoptionStatus}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#B71C1C] text-white py-2 rounded-md hover:bg-[#D32F2F]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;
