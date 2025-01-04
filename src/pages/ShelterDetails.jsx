import { useState, useEffect, useContext } from "react";
import { ShelterAuthContext } from "../context/ShelterAuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const ShelterDetails = () => {
  const { shelter, logoutShelterUser } = useContext(ShelterAuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: shelter?.username || "",
    email: shelter?.email || "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!shelter) {
      navigate("/application");
    }
  }, [shelter, navigate]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.put("/shelteruser/profile", formData, {
        withCredentials: true,
      });
      setFormData({
        ...formData,
        password: "",
      });
      localStorage.setItem("shelteruser", JSON.stringify(res.data));
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };
  return (
    <div className="max-w-[95%] mx-auto p-4 sm:p-6 lg:p-10">
      <div className="bg-[#F5F5F5] p-8 shadow-xl rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-[#B71C1C]">User Profile</h1>

        {!isEditing ? (
          <div>
            <p className="text-[#B71C1C] ">
              <strong>Username:</strong> {shelter?.username}
            </p>
            <p className="text-[#B71C1C] ">
              <strong>Email:</strong> {shelter?.email}
            </p>

            <button
              onClick={handleEditToggle}
              className="bg-[#B71C1C] text-white px-6 py-3 mt-4 rounded-md hover:bg-[#FFCDD2]"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          // Editable form
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-[#B71C1C]"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-[#B71C1C] bg-white border-[#FF8A80]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#B71C1C]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-[#B71C1C] bg-white border-[#FF8A80]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-[#B71C1C]"
              >
                Password (Leave blank to keep the same)
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-[#B71C1C] bg-white border-[#FF8A80]"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-[#D32F2F] text-white  px-6 py-3 rounded-md hover:bg-[#FF8A80]"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={handleEditToggle}
                className="bg-gray-500 text-white px-6 py-3 mt-4 rounded-md hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <button
          onClick={logoutShelterUser}
          className="bg-[#B71C1C] text-white px-6 py-3 mt-4 rounded-md hover:bg-[#FFCDD2]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default ShelterDetails;
