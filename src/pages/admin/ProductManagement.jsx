/* eslint-disable no-unused-vars */
import { Edit2, Eye, PlusCircle, Trash2, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { productApi } from "../../redux/features/product/productApi";
import Loading from "../../componants/Loading";

const ProductManagementIndex = () => {
  const { data, isLoading } = productApi.useGetProductsQuery();
  const [createProduct] = productApi.useCreateProductMutation();
  const [updateProduct] = productApi.useUpdateProductByIdMutation();
  const [deleteProductAPI] = productApi.useDeleteProductByIdMutation();

  const [productList, setProductList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categoryOptions = [
    "Biscuits",
    "Cookies & Bakery",
    "Confectionery",
    "Snacks",
    "Powder Drinks",
    "Batteries",
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      category: "Biscuits",
      imageFile: null,
    },
  });

  useEffect(() => {
    if (data) {
      setProductList(data);
    }
  }, [data]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleCategoryChange = (e) => setCategoryFilter(e.target.value);

  const filteredProducts = productList.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === "" || product.category === categoryFilter)
  );

  const openModal = (product = null) => {
    if (product) {
      reset({
        name: product.name,
        category: product.category,
        imageFile: null,
      });
      setPreviewImage(product.image);
      setEditingId(product._id);
    } else {
      reset({
        name: "",
        category: "Biscuits",
        imageFile: null,
      });
      setPreviewImage("");
      setEditingId(null);
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const onSubmit = async (formData) => {
    const toastId = toast.loading(
      editingId ? "Updating product..." : "Creating product..."
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

      if (!imageUrl && !editingId) {
        toast.error("Product image is required.");
        toast.dismiss(toastId);
        setButtonLoading(false);
        return;
      }

      const finalData = {
        name: formData.name,
        category: formData.category,
        image: imageUrl,
      };

      if (editingId) {
        await updateProduct({ id: editingId, data: finalData }).unwrap();
        toast.success("Product updated successfully");
      } else {
        await createProduct(finalData).unwrap();
        toast.success("Product created successfully");
      }

      closeModal();
    } catch (err) {
      toast.error("Failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
      setButtonLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    const toastId = toast.loading("Deleting product...");
    try {
      const product = productList.find((p) => p._id === id);
      await deleteProductAPI(id).unwrap();
      toast.success(`Deleted: ${product.name}`);
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
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:max-w-lg">
          <input
            type="text"
            placeholder="Search Products"
            className="border p-2 rounded w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="border p-2 rounded w-full sm:w-auto"
          >
            <option value="">All Categories</option>
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
        >
          <PlusCircle className="inline-block mr-1" size={18} /> Add Product
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <img
                        src={product.image}
                        alt="thumb"
                        className="w-10 h-10 rounded object-cover"
                      />
                    </td>

                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="text-green-600 hover:text-green-800"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => openModal(product)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteProduct(product._id)}
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
                    No products found
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
                  {editingId ? "Edit Product" : "Add Product"}
                </h2>
                <button onClick={closeModal}>
                  <XCircle size={22} />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">
                    Product Name
                  </label>
                  <input
                    {...register("name", {
                      required: "Product name is required",
                    })}
                    className="w-full border rounded p-2"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Category</label>
                  <select
                    {...register("category", {
                      required: "Category is required",
                    })}
                    className="w-full border rounded p-2"
                  >
                    {categoryOptions.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-sm text-red-500">
                      {errors.category.message}
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
                    {...register("imageFile", {
                      required:
                        !editingId && !previewImage
                          ? "Image is required"
                          : false,
                    })}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setPreviewImage(URL.createObjectURL(file));
                      }
                    }}
                    className="w-full border rounded p-2"
                  />
                  {errors.imageFile && (
                    <p className="text-sm text-red-500">
                      {errors.imageFile.message}
                    </p>
                  )}
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
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-6 rounded-lg w-full max-w-xl shadow-xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Product Details</h2>
                <button onClick={() => setSelectedProduct(null)}>
                  <XCircle size={22} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center mb-2">
                  <img
                    src={selectedProduct.image}
                    alt="Product"
                    className="w-64 h-64 object-contain rounded shadow"
                  />
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Name:</strong> {selectedProduct.name}
                  </p>
                  <p>
                    <strong>Category:</strong>{" "}
                    <span className="px-2 py-1 bg-gray-100 rounded-full">
                      {selectedProduct.category}
                    </span>
                  </p>
                  <p>
                    <strong>Created:</strong>{" "}
                    {formatDate(selectedProduct.createdAt)}
                  </p>
                  <p>
                    <strong>Last Updated:</strong>{" "}
                    {formatDate(selectedProduct.updatedAt)}
                  </p>
                  <p>
                    <strong>Product ID:</strong> {selectedProduct._id}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductManagementIndex;
