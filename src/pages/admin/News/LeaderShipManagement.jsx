/* eslint-disable no-unused-vars */
import { Edit2, PlusCircle, Trash2, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { leadershipApi } from "../../../redux/features/leadership/leadershipApi";
import Loading from "../../../componants/Loading";

const LeadershipManagementIndex = () => {
  const { data, isLoading } = leadershipApi.useGetLeadershipsQuery();
  const [createLeader] = leadershipApi.useCreateLeadershipMutation();
  const [updateLeader] = leadershipApi.useUpdateLeadershipByIdMutation();
  const [deleteLeader] = leadershipApi.useDeleteLeadershipByIdMutation();

  const [leadershipList, setLeadershipList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      role: "",
      biography: "",
      imageFile: null,
    },
  });

  useEffect(() => {
    if (data) setLeadershipList(data);
  }, [data]);

  const openModal = (leader = null) => {
    if (leader) {
      reset({
        name: leader.name,
        role: leader.role,
        biography: leader.biography,
        imageFile: null,
      });
      setPreviewImage(leader.img);
      setEditingId(leader._id);
    } else {
      reset();
      setPreviewImage("");
      setEditingId(null);
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredList = leadershipList?.filter((l) =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const onSubmit = async (formData) => {
    const toastId = toast.loading(
      editingId ? "Updating leader..." : "Creating leader..."
    );
    setButtonLoading(true);
    try {
      let imageUrl = previewImage;

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

        console.log("resss", res);

        imageUrl = res.data.image;
      }

      const payload = {
        name: formData.name,
        role: formData.role,
        biography: formData.biography,
        img: imageUrl,
      };

      if (editingId) {
        await updateLeader({ id: editingId, data: payload }).unwrap();
        toast.success("Leader updated successfully!");
      } else {
        await createLeader(payload).unwrap();
        toast.success("Leader created successfully!");
      }

      closeModal();
    } catch (err) {
      toast.error("Failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
      setButtonLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting...");
    try {
      const leader = leadershipList?.find((l) => l._id === id);
      await deleteLeader(id).unwrap();
      toast.success(`Deleted: ${leader.name}`);
    } catch (err) {
      toast.error("Delete failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="px-4 py-6 mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Leadership Management</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search Leaders"
          className="border p-2 rounded w-full sm:max-w-sm"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
        >
          <PlusCircle className="mr-1" size={18} /> Add Leader
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.length ? (
                filteredList.map((leader) => (
                  <tr key={leader._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{leader.name}</td>
                    <td className="px-4 py-2">{leader.role}</td>
                    <td className="px-4 py-2">
                      <img
                        src={leader.img}
                        alt="Leader"
                        className="w-10 h-10 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openModal(leader)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(leader._id)}
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
                  <td colSpan="5" className="text-center p-4 text-gray-500">
                    No leaders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
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
                  {editingId ? "Edit Leader" : "Add Leader"}
                </h2>
                <button onClick={closeModal}>
                  <XCircle size={22} />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full border rounded p-2"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Role</label>
                  <input
                    {...register("role", { required: "Role is required" })}
                    className="w-full border rounded p-2"
                  />
                  {errors.role && (
                    <p className="text-sm text-red-500">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Biography</label>
                  <textarea
                    {...register("biography", {
                      required: "Biography is required",
                    })}
                    className="w-full border rounded p-2"
                  ></textarea>
                  {errors.biography && (
                    <p className="text-sm text-red-500">
                      {errors.biography.message}
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
    </div>
  );
};

export default LeadershipManagementIndex;
