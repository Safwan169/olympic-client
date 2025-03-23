import {
  Calendar,
  CheckCircle,
  Edit2,
  PlusCircle,
  Trash2,
  XCircle,
} from "lucide-react";
import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { milestoneApi } from "../../../redux/features/milestone/milestoneApi";

const Milestone = () => {
  const { data, isLoading, error } = milestoneApi.useGetMilestonesQuery();
  const [createMilestone, { isLoading: isCreating }] =
    milestoneApi.useCreateMilestoneMutation();
  const [updateMilestone, { isLoading: isUpdating }] =
    milestoneApi.useUpdateMilestoneByIdMutation();
  const [deleteMilestoneAPI, { isLoading: isDeleting }] =
    milestoneApi.useDeleteMilestoneByIdMutation();

  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];



  // React Hook Form setup
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



  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMilestones = data?.filter(
    (milestone) =>
      milestone?.year?.toString().includes(searchTerm?.toLowerCase()) ||
      milestone?.month?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      milestone?.text?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const openModal = (milestone = null) => {
    if (milestone) {
      // Reset form with milestone data for editing
      reset({
        year: milestone.year,
        month: milestone.month,
        text: milestone.text,
      });
      setEditingId(milestone._id);

      toast.info("Editing milestone details", {
        description: `You're now editing "${milestone.month} ${milestone.year}" milestone`,
        icon: <Edit2 size={18} />,
        position: "top-right",
      });
    } else {
      // Reset form to default values for new milestone
      reset({
        year: "",
        month: "",
        text: "",
      });
      setEditingId(null);

      toast.info("Creating a new milestone", {
        description: "Fill in the details to create a new milestone",
        icon: <PlusCircle size={18} />,
        position: "top-right",
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmit = async (formData) => {
    try {
      // Convert year to number
      const data = {
        ...formData,
        year: parseInt(formData.year, 10)
      };

      if (editingId) {
        // Update existing milestone using API
        const response = await updateMilestone({
          id: editingId,
          data,
        }).unwrap();

        if (response) {
          toast.success("Milestone updated successfully", {
            description: `"${formData.month} ${formData.year}" milestone has been updated`,
            icon: <CheckCircle size={18} />,
            position: "top-right",
            duration: 3000,
          });
        }
      } else {
        // Add new milestone using API
        const response = await createMilestone(data).unwrap();

        if (response) {
          toast.success("Milestone created successfully", {
            description: `"${formData.month} ${formData.year}" milestone has been added to your timeline`,
            icon: <CheckCircle size={18} />,
            position: "top-right",
            duration: 3000,
          });
        }
      }
      closeModal();
    } catch (err) {
      console.error("Error saving milestone:", err);
      toast.error("Operation failed", {
        description: err.message || "There was an error while saving the milestone",
        position: "top-right",
        duration: 4000,
      });
    }
  };

  const deleteMilestone = async (milestoneId) => {
    try {
      const milestoneToDelete = data?.find(
        (milestone) => milestone._id === milestoneId
      );

      if (!milestoneToDelete) {
        toast.error("Error", {
          description: "Milestone not found",
          duration: 3000,
        });
        return;
      }

      const response = await deleteMilestoneAPI(milestoneId).unwrap();

      console.log(response);

      // if (response) {
      //   toast.success("Milestone deleted successfully", {
      //     description: `"${milestoneToDelete.month} ${milestoneToDelete.year}" has been removed from your timeline`,
      //     duration: 3000,
      //   });
      // }
    } catch (error) {
      toast.error("Deletion failed", {
        description:
          error.message || "There was an error while deleting the milestone",
        duration: 4000,
      });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading milestones...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500 bg-red-50 rounded-lg border border-red-200">
        <XCircle size={40} className="mx-auto mb-2" />
        <h3 className="text-lg font-semibold">Error loading milestones</h3>
        <p>{error.message}</p>
        <button
          className="mt-3 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  // Card view for mobile devices
  const MilestoneCard = ({ milestone }) => (
    <div className="bg-white rounded-md shadow p-4 mb-4 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <div className="h-10 w-10 rounded-full flex items-center justify-center mr-3 bg-blue-100 text-blue-600 transition-transform hover:scale-110 duration-300">
          <Calendar size={20} />
        </div>
        <div>
          <div className="font-medium text-gray-900 flex items-center">
            {milestone.month} {milestone.year}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="text-gray-700">{milestone.text}</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">
          Created: {formatDate(milestone.createdAt)}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => openModal(milestone)}
            className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-full transition-colors duration-200"
            disabled={isUpdating}
            title="Edit Milestone"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => deleteMilestone(milestone._id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors duration-200"
            disabled={isDeleting}
            title="Delete Milestone"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-3 sm:p-4 md:p-6 max-w-6xl mx-auto">
      {/* Sonner Toaster component */}
      <Toaster richColors closeButton />

      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Milestone Timeline</h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="relative w-full max-w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Search Milestones"
            className="w-full p-2 sm:p-3 border rounded-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <button
          className="bg-blue-500 text-white hover:bg-blue-600 w-full sm:w-auto px-4 py-2 sm:py-3 rounded-sm flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200 shadow hover:shadow-md"
          onClick={() => openModal()}
          disabled={isCreating}
        >
          <PlusCircle size={20} />
          <span>Add Milestone</span>
        </button>
      </div>

      {/* Table view for medium and larger screens */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
               
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMilestones.length > 0 ? (
                filteredMilestones.map((milestone) => (
                  <tr
                    key={milestone._id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 transition-transform hover:scale-110 duration-300">
                          <Calendar size={20} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {milestone.month} {milestone.year}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {milestone.text}
                      </div>
                    </td>
                  
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => openModal(milestone)}
                          className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-full transition-colors duration-200"
                          disabled={isUpdating}
                          title="Edit Milestone"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteMilestone(milestone._id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors duration-200"
                          disabled={isDeleting}
                          title="Delete Milestone"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No milestones found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Card view for small screens */}
      <div className="md:hidden">
        {filteredMilestones.length > 0 ? (
          filteredMilestones.map((milestone) => (
            <MilestoneCard key={milestone._id} milestone={milestone} />
          ))
        ) : (
          <div className="bg-white rounded-md shadow p-4 text-center text-gray-500">
            No milestones found
          </div>
        )}
      </div>

      {/* Add/Edit Milestone Modal with React Hook Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl h-auto sm:max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold">
                  {editingId ? "Edit Milestone" : "Add New Milestone"}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1 transition-colors duration-200"
                  title="Close"
                >
                  <XCircle size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year
                    </label>
                    <input
                     {...register("year", {
                      required: "Year is required",
                      pattern: {
                        value: /^\d{4}$/,
                        message: "Year must be a 4-digit number"
                      }
                    })}
                      type="number"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all"
                      placeholder="2025"
                    />
                    {errors.year && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.year.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Month
                    </label>
                    <select
                      {...register("month", {
                        required: "Month is required",
                      })}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select a month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    {errors.month && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.month.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Milestone Description
                    </label>
                    <textarea
                      {...register("text", {
                        required: "Description is required",
                      })}
                      rows={4}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all"
                      placeholder="Describe this milestone..."
                    />
                    {errors.text && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.text.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-3 sm:px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow hover:shadow-md transition-all duration-200"
                    disabled={isCreating || isUpdating}
                  >
                    {isCreating || isUpdating ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {editingId ? "Updating..." : "Creating..."}
                      </span>
                    ) : (
                      <span>{editingId ? "Update Milestone" : "Create Milestone"}</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Milestone;