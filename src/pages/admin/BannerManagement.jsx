/* eslint-disable no-unused-vars */
import { Edit2, Eye, PlusCircle, Trash2, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { bannerApi } from "../../redux/features/banner/bannerApi";
import Loading from "../../componants/Loading";

const BannerManagementIndex = () => {
  const { data, isLoading } = bannerApi.useGetBannersQuery();
  const [createBanner] = bannerApi.useCreateBannerMutation();
  const [updateBanner] = bannerApi.useUpdateBannerByIdMutation();
  const [deleteBanner] = bannerApi.useDeleteBannerByIdMutation();

  const [bannerList, setBannerList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [selectedBanner, setSelectedBanner] = useState(null); // 👁️ View state

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      imageFile: null,
    },
  });

  useEffect(() => {
    if (data) setBannerList(data);
  }, [data]);

  const openModal = (banner = null) => {
    if (banner) {
      reset({
        title: banner.title,
        content: banner.content,
        imageFile: null,
      });
      setPreviewImage(banner.img);
      setEditingId(banner._id);
    } else {
      reset();
      setPreviewImage("");
      setEditingId(null);
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredBanners = bannerList?.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const onSubmit = async (formData) => {
    const toastId = toast.loading(
      editingId ? "Updating banner..." : "Creating banner..."
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

        imageUrl = res.data.image;
      }

      const payload = {
        title: formData.title,
        content: formData.content,
        img: imageUrl,
      };

      if (editingId) {
        await updateBanner({ id: editingId, data: payload }).unwrap();
        toast.success("Banner updated successfully!");
      } else {
        await createBanner(payload).unwrap();
        toast.success("Banner created successfully!");
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
    const toastId = toast.loading("Deleting banner...");
    try {
      const banner = bannerList?.find((b) => b._id === id);
      await deleteBanner(id).unwrap();
      toast.success(`Deleted: ${banner.title}`);
    } catch (err) {
      toast.error("Delete failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="px-4 py-6 mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Banner Management</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search Banners"
          className="border p-2 rounded w-full sm:max-w-sm"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
        >
          <PlusCircle className="mr-1" size={18} /> Add Banner
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBanners.length ? (
                filteredBanners.map((banner) => (
                  <tr key={banner._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{banner.title}</td>
                    <td className="px-4 py-2">
                      <img
                        src={banner.img}
                        alt="Banner"
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">{formatDate(banner.date)}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedBanner(banner)}
                          className="text-green-600 hover:text-green-800"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => openModal(banner)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(banner._id)}
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
                    No banners found
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
                  {editingId ? "Edit Banner" : "Add Banner"}
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
                  <label className="block text-sm font-medium">Content</label>
                  <textarea
                    {...register("content", {
                      required: "Content is required",
                    })}
                    className="w-full border rounded p-2"
                  ></textarea>
                  {errors.content && (
                    <p className="text-sm text-red-500">
                      {errors.content.message}
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
        {selectedBanner && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-6 rounded-lg w-full max-w-xl shadow-xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Banner Details</h2>
                <button onClick={() => setSelectedBanner(null)}>
                  <XCircle size={22} />
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <p>
                  <strong>Title:</strong> {selectedBanner.title}
                </p>
                <p>
                  <strong>Content:</strong> {selectedBanner.content}
                </p>
                <p>
                  <strong>Date:</strong> {formatDate(selectedBanner.date)}
                </p>
                <p>
                  <strong>Image:</strong>
                </p>
                <img
                  src={selectedBanner.img}
                  alt="Banner"
                  className="w-full max-w-xs rounded shadow"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BannerManagementIndex;
