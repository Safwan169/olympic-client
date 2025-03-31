/* eslint-disable no-unused-vars */
import { Edit2, Eye, PlusCircle, Trash2, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { milestoneApi } from "../../../redux/features/milestone/milestoneApi";
import Loading from "../../../componants/Loading";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MilestoneManagementIndex = () => {
  const { data, isLoading } = milestoneApi.useGetMilestonesQuery();
  const [createMilestone] = milestoneApi.useCreateMilestoneMutation();
  const [updateMilestone] = milestoneApi.useUpdateMilestoneByIdMutation();
  const [deleteMilestone] = milestoneApi.useDeleteMilestoneByIdMutation();

  const [milestoneList, setMilestoneList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      year: "",
      month: "",
      text: "",
    },
  });

  useEffect(() => {
    if (data) setMilestoneList(data);
  }, [data]);

  const openModal = (milestone = null) => {
    if (milestone) {
      reset({
        year: milestone.year,
        month: milestone.month,
        text: milestone.text,
      });
      setEditingId(milestone._id);
    } else {
      reset();
      setEditingId(null);
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredMilestones = milestoneList?.filter((m) =>
    m.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSubmit = async (formData) => {
    const toastId = toast.loading(editingId ? "Updating..." : "Creating...");
    setButtonLoading(true);
    try {
      if (editingId) {
        await updateMilestone({ id: editingId, data: formData }).unwrap();
        toast.success("Milestone updated successfully!");
      } else {
        await createMilestone(formData).unwrap();
        toast.success("Milestone created successfully!");
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
      const item = milestoneList?.find((m) => m._id === id);
      await deleteMilestone(id).unwrap();
      toast.success(`Deleted: ${item.text}`);
    } catch (err) {
      toast.error("Delete failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="px-4 py-6 mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Milestone Management</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search milestone text"
          className="border p-2 rounded w-full sm:max-w-sm"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
        >
          <PlusCircle className="mr-1" size={18} /> Add Milestone
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Year</th>
                <th className="px-4 py-2">Month</th>
                <th className="px-4 py-2">Text</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMilestones.length ? (
                filteredMilestones.map((milestone) => (
                  <tr key={milestone._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{milestone.year}</td>
                    <td className="px-4 py-2">{milestone.month}</td>
                    <td className="px-4 py-2">{milestone.text}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedMilestone(milestone)}
                          className="text-green-600 hover:text-green-800"
                          title="View"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => openModal(milestone)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(milestone._id)}
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
                    No milestones found
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
              className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl mx-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold">
                  {editingId ? "Edit Milestone" : "Add Milestone"}
                </h2>
                <button onClick={closeModal}>
                  <XCircle size={22} />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Year</label>
                  <input
                    type="number"
                    {...register("year", { required: "Year is required" })}
                    className="w-full border rounded p-2"
                  />
                  {errors.year && (
                    <p className="text-sm text-red-500">
                      {errors.year.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Month</label>
                  <select
                    {...register("month", { required: "Month is required" })}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select month</option>
                    {months.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  {errors.month && (
                    <p className="text-sm text-red-500">
                      {errors.month.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Text</label>
                  <textarea
                    {...register("text", { required: "Text is required" })}
                    className="w-full border rounded p-2"
                    rows={4}
                  />
                  {errors.text && (
                    <p className="text-sm text-red-500">
                      {errors.text.message}
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

      {/* View Modal */}
      <AnimatePresence>
        {selectedMilestone && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl mx-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Milestone Details</h2>
                <button onClick={() => setSelectedMilestone(null)}>
                  <XCircle size={22} />
                </button>
              </div>

              <div className="space-y-2 text-sm">
                <p>
                  <strong>Year:</strong> {selectedMilestone.year}
                </p>
                <p>
                  <strong>Month:</strong> {selectedMilestone.month}
                </p>
                <p>
                  <strong>Text:</strong> {selectedMilestone.text}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MilestoneManagementIndex;
