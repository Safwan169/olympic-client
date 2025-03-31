/* eslint-disable no-unused-vars */
import { Edit2, Eye, PlusCircle, Trash2, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { newsApi } from "../../../redux/features/news/newsApi";
import Loading from "../../../componants/Loading";

const NewsManagementIndex = () => {
  const { data, isLoading } = newsApi.useGetNewsQuery();
  const [createNews] = newsApi.useCreateNewsMutation();
  const [updateNews] = newsApi.useUpdateNewsByIdMutation();
  const [deleteNewsAPI] = newsApi.useDeleteNewsByIdMutation();

  const [newsList, setNewsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [selectedNews, setSelectedNews] = useState(null); // 👁️ View state

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      imageFile: null,
    },
  });

  useEffect(() => {
    if (data) {
      setNewsList(data);
    }
  }, [data]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredNews = newsList.filter((news) =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (news = null) => {
    if (news) {
      reset({
        title: news.title,
        description: news.description,
        imageFile: null,
      });
      setPreviewImage(news.imageUrl);
      setEditingId(news._id);
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
      editingId ? "Updating news..." : "Creating news..."
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

      const finalData = {
        title: formData.title,
        description: formData.description,
        imageUrl,
      };

      if (editingId) {
        await updateNews({ id: editingId, data: finalData }).unwrap();
        toast.success("News updated successfully");
      } else {
        await createNews(finalData).unwrap();
        toast.success("News created successfully");
      }

      closeModal();
    } catch (err) {
      toast.error("Failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
      setButtonLoading(false);
    }
  };

  const deleteNews = async (id) => {
    const toastId = toast.loading("Deleting news...");
    try {
      const news = newsList.find((n) => n._id === id);
      await deleteNewsAPI(id).unwrap();
      toast.success(`Deleted: ${news.title}`);
    } catch (err) {
      toast.error("Delete failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  if (isLoading) return <Loading />;

  return (
    <div className="px-4 py-6 mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">News Management</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search News"
          className="border p-2 rounded w-full sm:max-w-sm"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
        >
          <PlusCircle className="inline-block mr-1" size={18} /> Add News
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
              {filteredNews.length ? (
                filteredNews.map((news) => (
                  <tr key={news._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{news.title}</td>
                    <td className="px-4 py-2">
                      <img
                        src={news.imageUrl}
                        alt="thumb"
                        className="w-10 h-10 rounded object-cover"
                      />
                    </td>
                    <td className="px-4 py-2">{formatDate(news.date)}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedNews(news)}
                          className="text-green-600 hover:text-green-800"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => openModal(news)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteNews(news._id)}
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
                    No news found
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
                  {editingId ? "Edit News" : "Add News"}
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
        {selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-6 rounded-lg w-full max-w-xl shadow-xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">News Details</h2>
                <button onClick={() => setSelectedNews(null)}>
                  <XCircle size={22} />
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <p>
                  <strong>Title:</strong> {selectedNews.title}
                </p>
                <p>
                  <strong>Description:</strong> {selectedNews.description}
                </p>
                <p>
                  <strong>Date:</strong> {formatDate(selectedNews.date)}
                </p>
                <p>
                  <strong>Image:</strong>
                </p>
                <img
                  src={selectedNews.imageUrl}
                  alt="News"
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

export default NewsManagementIndex;
