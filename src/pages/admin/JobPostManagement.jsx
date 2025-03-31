/* eslint-disable no-unused-vars */
import { Edit2, Eye, PlusCircle, Trash2, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { jobPostApi } from "../../redux/features/jobPost/jobPostApi";
import Loading from "../../componants/Loading";

const jobNatures = ["Full-time", "Part-time", "Contract", "Internship"];

const JobPostManagementIndex = () => {
  const { data, isLoading } = jobPostApi.useGetJobPostsQuery();
  const [createJob] = jobPostApi.useCreateJobPostMutation();
  const [updateJob] = jobPostApi.useUpdateJobPostByIdMutation();
  const [deleteJob] = jobPostApi.useDeleteJobPostByIdMutation();

  const [jobList, setJobList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); // 👈 View state

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      jobNature: "",
      experienceRequirements: "",
      educationalRequirements: "",
      additionalRequirements: "",
      jobLocation: "",
      minSalary: "",
      maxSalary: "",
      otherBenefits: "",
      jobDeadline: "",
    },
  });

  useEffect(() => {
    if (data) setJobList(data);
  }, [data]);

  const openModal = (job = null) => {
    if (job) {
      const [minSalary, maxSalary] =
        job.salaryRange
          ?.split("-")
          .map((s) => s.trim().replace(/[^\d]/g, "")) || [];

      reset({
        title: job.title,
        jobNature: job.jobNature,
        experienceRequirements: job.experienceRequirements,
        educationalRequirements: job.educationalRequirements,
        additionalRequirements: job.additionalRequirements || "",
        jobLocation: job.jobLocation,
        minSalary,
        maxSalary,
        otherBenefits: job.otherBenefits || "",
        jobDeadline: job.jobDeadline?.split("T")[0],
      });
      setEditingId(job._id);
    } else {
      reset();
      setEditingId(null);
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobList?.filter((j) =>
    j.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const onSubmit = async (formData) => {
    const toastId = toast.loading(
      editingId ? "Updating job..." : "Creating job..."
    );
    setButtonLoading(true);
    try {
      const { minSalary, maxSalary, ...rest } = formData;
      const salaryRange = `${minSalary} - ${maxSalary} BDT`;
      const payload = { ...rest, salaryRange };

      if (editingId) {
        await updateJob({ id: editingId, data: payload }).unwrap();
        toast.success("Job updated successfully!");
      } else {
        await createJob(payload).unwrap();
        toast.success("Job created successfully!");
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
    const toastId = toast.loading("Deleting job...");
    try {
      const job = jobList?.find((j) => j._id === id);
      await deleteJob(id).unwrap();
      toast.success(`Deleted: ${job.title}`);
    } catch (err) {
      toast.error("Delete failed", { description: err.message });
    } finally {
      toast.dismiss(toastId);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="px-4 py-6  mx-auto w-full ">
      <h1 className="text-2xl font-bold mb-4">Job Post Management</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search jobs"
          className="border p-2 rounded w-full sm:max-w-sm"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
        >
          <PlusCircle className="mr-1 text-center" size={18} /> Add Job
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Nature</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Deadline</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.length ? (
                filteredJobs.map((job) => (
                  <tr key={job._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{job.title}</td>
                    <td className="px-4 py-2">{job.jobNature}</td>
                    <td className="px-4 py-2">{job.jobLocation}</td>
                    <td className="px-4 py-2">{formatDate(job.jobDeadline)}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="text-green-600 hover:text-green-800"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => openModal(job)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(job._id)}
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
                    No job posts found
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
              className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] shadow-xl mx-4 overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold">
                  {editingId ? "Edit Job" : "Add Job"}
                </h2>
                <button onClick={closeModal}>
                  <XCircle size={22} />
                </button>
              </div>

              <div
                className="overflow-y-auto pr-2"
                style={{ maxHeight: "70vh" }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {[
                    {
                      label: "Title",
                      name: "title",
                      type: "text",
                      required: true,
                    },
                    {
                      label: "Experience Requirements",
                      name: "experienceRequirements",
                      type: "text",
                      required: true,
                    },
                    {
                      label: "Educational Requirements",
                      name: "educationalRequirements",
                      type: "text",
                      required: true,
                    },
                    {
                      label: "Additional Requirements",
                      name: "additionalRequirements",
                      type: "text",
                    },
                    {
                      label: "Job Location",
                      name: "jobLocation",
                      type: "text",
                      required: true,
                    },
                    {
                      label: "Other Benefits",
                      name: "otherBenefits",
                      type: "text",
                    },
                  ].map(({ label, name, type, required }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium">
                        {label}
                      </label>
                      <input
                        type={type}
                        {...register(
                          name,
                          required ? { required: `${label} is required` } : {}
                        )}
                        className="w-full border rounded p-2"
                      />
                      {errors[name] && (
                        <p className="text-sm text-red-500">
                          {errors[name].message}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-medium">
                      Salary Range (BDT)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        {...register("minSalary", {
                          required: "Min salary is required",
                        })}
                        className="w-full border rounded p-2"
                      />
                      <span>to</span>
                      <input
                        type="number"
                        placeholder="Max"
                        {...register("maxSalary", {
                          required: "Max salary is required",
                        })}
                        className="w-full border rounded p-2"
                      />
                    </div>
                    {(errors.minSalary || errors.maxSalary) && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.minSalary?.message || errors.maxSalary?.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">
                      Job Nature
                    </label>
                    <select
                      {...register("jobNature", {
                        required: "Job Nature is required",
                      })}
                      className="w-full border rounded p-2"
                    >
                      <option value="">Select type</option>
                      {jobNatures.map((j) => (
                        <option key={j} value={j}>
                          {j}
                        </option>
                      ))}
                    </select>
                    {errors.jobNature && (
                      <p className="text-sm text-red-500">
                        {errors.jobNature.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">
                      Job Deadline
                    </label>
                    <input
                      type="date"
                      {...register("jobDeadline", {
                        required: "Deadline is required",
                      })}
                      className="w-full border rounded p-2"
                    />
                    {errors.jobDeadline && (
                      <p className="text-sm text-red-500">
                        {errors.jobDeadline.message}
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 🔍 View Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-6 rounded-lg w-full max-w-3xl shadow-xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Job Details</h2>
                <button onClick={() => setSelectedJob(null)}>
                  <XCircle size={22} />
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <p>
                  <strong>Title:</strong> {selectedJob.title}
                </p>
                <p>
                  <strong>Nature:</strong> {selectedJob.jobNature}
                </p>
                <p>
                  <strong>Experience Requirements:</strong>{" "}
                  {selectedJob.experienceRequirements}
                </p>
                <p>
                  <strong>Educational Requirements:</strong>{" "}
                  {selectedJob.educationalRequirements}
                </p>
                {selectedJob.additionalRequirements && (
                  <p>
                    <strong>Additional Requirements:</strong>{" "}
                    {selectedJob.additionalRequirements}
                  </p>
                )}
                <p>
                  <strong>Location:</strong> {selectedJob.jobLocation}
                </p>
                <p>
                  <strong>Salary Range:</strong> {selectedJob.salaryRange}
                </p>
                {selectedJob.otherBenefits && (
                  <p>
                    <strong>Other Benefits:</strong> {selectedJob.otherBenefits}
                  </p>
                )}
                <p>
                  <strong>Deadline:</strong>{" "}
                  {formatDate(selectedJob.jobDeadline)}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {formatDate(selectedJob.createdAt)}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobPostManagementIndex;
