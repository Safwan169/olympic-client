/* eslint-disable no-unused-vars */
import { Edit2, Eye, PlusCircle, Trash2, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { achievementApi } from "../../../redux/features/achievement/achievementApi";
import Loading from "../../../componants/Loading";

const AchievementManagement = () => {
  const { data, isLoading } = achievementApi.useGetAchievementsQuery();
  const [createAchievement] = achievementApi.useCreateAchievementMutation();
  const [updateAchievement] = achievementApi.useUpdateAchievementByIdMutation();
  const [deleteAchievementAPI] =
    achievementApi.useDeleteAchievementByIdMutation();

  const [achievementList, setAchievementList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      awardYear: "",
      description: "",
      imageFile: null,
    },
  });

  useEffect(() => {
    if (data) setAchievementList(data);
  }, [data]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredAchievements = achievementList.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (achievement = null) => {
    if (achievement) {
      reset({
        title: achievement.title,
        awardYear: achievement.awardYear,
        description: achievement.description,
        imageFile: null,
      });
      setPreviewImage(achievement.image);
      setEditingId(achievement._id);
    } else {
      reset();
      setPreviewImage("");
      setEditingId(null);
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const onSubmit = async (formData) => {
    const toastId = toast.loading(
      editingId ? "Updating achievement..." : "Creating achievement..."
    );
    setButtonLoading(true);
    try {
      let image = previewImage;

      if (formData.imageFile && formData.imageFile[0]) {
        const file = formData.imageFile[0];
        const form = new FormData();
        form.append("image", file);

        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/upload/image`,
          form,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (!res.data.image) {
          toast.error("Image upload failed.");
          return;
        }

        image = res.data.image;
      }

      const finalData = {
        title: formData.title,
        awardYear: Number(formData.awardYear),
        description: formData.description,
        image,
      };

      if (editingId) {
        await updateAchievement({ id: editingId, data: finalData }).unwrap();
        toast.success("Achievement updated successfully");
      } else {
        await createAchievement(finalData).unwrap();
        toast.success("Achievement created successfully");
      }

      closeModal();
    } catch (err) {
      toast.error("Failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
      setButtonLoading(false);
    }
  };

  const deleteAchievement = async (id) => {
    const toastId = toast.loading("Deleting achievement...");
    try {
      const achievement = achievementList.find((a) => a._id === id);
      await deleteAchievementAPI(id).unwrap();
      toast.success(`Deleted: ${achievement.title}`);
    } catch (err) {
      toast.error("Delete failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="px-4 py-6 mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Achievement Management</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search Achievements"
          className="border p-2 rounded w-full sm:max-w-sm"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
        >
          <PlusCircle className="inline-block mr-1" size={18} /> Add Achievement
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Year</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAchievements.length ? (
                filteredAchievements.map((a) => (
                  <tr key={a._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{a.title}</td>
                    <td className="px-4 py-2">{a.awardYear}</td>
                    <td className="px-4 py-2">
                      {a.image && (
                        <img
                          src={a.image}
                          alt="achievement"
                          className="w-10 h-10 rounded object-cover"
                        />
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedAchievement(a)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => openModal(a)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteAchievement(a._id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    No achievements found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">
                  {editingId ? "Edit Achievement" : "Add Achievement"}
                </h2>
                <button onClick={closeModal}>
                  <XCircle size={22} />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Title</label>
                  <input
                    {...register("title", { required: "Title is required" })}
                    className="w-full border rounded p-2"
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Award Year
                  </label>
                  <input
                    type="number"
                    {...register("awardYear", { required: "Year is required" })}
                    className="w-full border rounded p-2"
                  />
                  {errors.awardYear && (
                    <p className="text-sm text-red-500">
                      {errors.awardYear.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    className="w-full border rounded p-2"
                  ></textarea>
                  {errors.description && (
                    <p className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Image</label>
                  {previewImage && (
                    <div className="mb-2">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded border"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    {...register("imageFile")}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setPreviewImage(URL.createObjectURL(file));
                      }
                    }}
                    className="w-full border rounded p-2"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="border px-4 py-2 rounded text-gray-600 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={buttonLoading}
                    className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
                      buttonLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {buttonLoading
                      ? "Processing..."
                      : editingId
                      ? "Update"
                      : "Create"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* View Details Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-6 rounded-lg w-full max-w-xl shadow-xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Achievement Details</h2>
                <button onClick={() => setSelectedAchievement(null)}>
                  <XCircle size={22} />
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <p>
                  <strong>Title:</strong> {selectedAchievement.title}
                </p>
                <p>
                  <strong>Award Year:</strong> {selectedAchievement.awardYear}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {selectedAchievement.description}
                </p>
                {selectedAchievement.image && (
                  <>
                    <p>
                      <strong>Image:</strong>
                    </p>
                    <img
                      src={selectedAchievement.image}
                      alt="Achievement"
                      className="w-full max-w-xs rounded shadow"
                    />
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementManagement;
