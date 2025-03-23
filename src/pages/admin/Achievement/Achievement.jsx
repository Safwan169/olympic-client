import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa"; // Using react-icons for better button design
import { getApi } from "../../../services/api";

const AchievementManager = () => {
  const [achievements, setAchievements] = useState([]);
  const [editAchievement, setEditAchievement] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search
  const [sortField, setSortField] = useState("title"); // Default sort field
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch achievements from backend
  const fetchAchievements = async () => {
    try {
      const response = await getApi("/achievements");
      setAchievements(response.data);
    } catch (error) {
      console.error("Error fetching achievements:", error);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  // Handle form submit
  const onSubmit = async (data) => {
    try {
      if (editAchievement) {
        await axios.put(`/api/achievements/${editAchievement._id}`, data);
      } else {
        await axios.post("/api/achievements", data);
      }
      setValue("title", "");
      setValue("awardYear", "");
      setValue("description", "");
      setValue("image", "");
      setEditAchievement(null);
      fetchAchievements(); // Fetch after create/update
      setIsFormVisible(false);
    } catch (error) {
      console.error("Error saving achievement:", error);
    }
  };

  // Handle editing an achievement
  const handleEdit = (achievement) => {
    setEditAchievement(achievement);
    setValue("title", achievement.title);
    setValue("awardYear", achievement.awardYear);
    setValue("description", achievement.description);
    setValue("image", achievement.image);
    setIsFormVisible(true);
  };

  // Handle deleting an achievement
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/achievements/${id}`);
      fetchAchievements(); // Fetch after delete
    } catch (error) {
      console.error("Error deleting achievement:", error);
    }
  };

  // Handle form cancel
  const handleCancel = () => {
    setIsFormVisible(false);
    setEditAchievement(null);
  };

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // Filter and sort achievements
  const filteredAchievements = achievements
    .filter((achievement) => {
      return (
        achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        achievement.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => {
      const compareValue = (a, b, field) => {
        if (a[field] < b[field]) return sortOrder === "asc" ? -1 : 1;
        if (a[field] > b[field]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      };

      return compareValue(a, b, sortField);
    });

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl text-black font-semibold mb-4 text-center">
        Manage Achievements
      </h2>

      <div className="flex justify-between mb-4">
        {/* Search input */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search achievements..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-1/3"
        />

        {/* Button to toggle the form visibility */}
        {!isFormVisible ? (
          <button
            onClick={() => setIsFormVisible(true)}
            className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Achievement
          </button>
        ) : (
          <button
            onClick={handleCancel}
            className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="awardYear"
              className="block text-sm font-medium text-gray-700"
            >
              Award Year
            </label>
            <input
              id="awardYear"
              type="number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("awardYear", { required: "Award Year is required" })}
            />
            {errors.awardYear && (
              <p className="text-sm text-red-500 mt-1">
                {errors.awardYear.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL (optional)
            </label>
            <input
              id="image"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("image")}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {editAchievement ? "Update" : "Create"} Achievement
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            onClick={handleCancel}
            className="w-full mt-2 py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </form>
      )}

      {/* Achievements Table */}

      <table className="min-w-full table-auto border-separate border-spacing-2">
        <thead>
          <tr className="bg-gray-100">
            <th
              className="px-4 py-2 text-left text-sm font-medium text-gray-700 cursor-pointer"
              onClick={() => handleSort("title")}
            >
              Title {sortField === "title" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-2 text-left text-sm font-medium text-gray-700 cursor-pointer"
              onClick={() => handleSort("awardYear")}
            >
              Award Year{" "}
              {sortField === "awardYear" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Description
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Image
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAchievements.map((achievement) => (
            <tr
              key={achievement._id}
              className="bg-white border-b hover:bg-gray-50"
            >
              <td className="px-4 py-2 text-sm text-gray-700">
                {achievement.title}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {achievement.awardYear}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {achievement.description}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {achievement.image ? (
                  <img src={achievement.image} alt="Achievement" width="50" />
                ) : (
                  "No Image"
                )}
              </td>
              <td className="px-4 py-2 text-sm">
                <button
                  onClick={() => handleEdit(achievement)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(achievement._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AchievementManager;
