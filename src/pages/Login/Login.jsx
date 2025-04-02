import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authApi } from "../../redux/features/auth/authApi";
import { decodeToken } from "../../utilities/decodeToken";
import { setUser } from "../../redux/features/auth/authSlice";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const AdminLoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [login] = authApi.useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin@SSD@25",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Authenticating...");

    try {
      const res = await login(data).unwrap();

      if (res) {
        const user = decodeToken(res?.token);
        const token = `${res?.token}`;
        dispatch(setUser({ user: user, token }));

        toast.success("Login successful. Welcome back!", {
          id: toastId,
          duration: 2000,
        });

        navigate("/admin/dashboard");
      }
    } catch (err) {
      console.log("err", err?.data?.error);
      const serverMsgErr = err?.data?.error || "Invalid credentials";

      toast.error(serverMsgErr, {
        id: toastId,
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/assets/login-banner.jpg')] bg-cover bg-center pt-16 bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dark overlay to reduce background brightness */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-600 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-800 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-700 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTgtLjk2OCAyLjE5OC0yLjE5OCAwLTEuMjMtLjk2OC0yLjE5OC0yLjE5OC0yLjE5OC0xLjIzIDAtMi4xOTguOTY4LTIuMTk4IDIuMTk4IDAgMS4yMy45NjggMi4xOTggMi4xOTggMi4xOTh6bTAgMzZjMS4yMyAwIDIuMTk4LS45NjggMi4xOTgtMi4xOTggMC0xLjIzLS45NjgtMi4xOTgtMi4xOTgtMi4xOTgtMS4yMyAwLTIuMTk4Ljk2OC0yLjE5OCAyLjE5OCAwIDEuMjMuOTY4IDIuMTk4IDIuMTk4IDIuMTk4em0tMTgtMThjMS4yMyAwIDIuMTk4LS45NjggMi4xOTgtMi4xOTggMC0xLjIzLS45NjgtMi4xOTgtMi4xOTgtMi4xOTgtMS4yMyAwLTIuMTk4Ljk2OC0yLjE5OCAyLjE5OCAwIDEuMjMuOTY4IDIuMTk4IDIuMTk4IDIuMTk4eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjAzIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIiBjeD0iMTgiIGN5PSIxOCIgcj0iMSIvPjxjaXJjbGUgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDMiIGN4PSIzNiIgY3k9IjM2IiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="max-w-md w-full relative z-10">
        {/* Logo and header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold">Admin Panel</h1>
          <p className="text-gray-400 mt-2">
            Enter your credentials to continue
          </p>
        </div>

        {/* Login card */}
        <div className="bg-gray-900/70 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-gray-300 font-medium text-sm block">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-red-500 transition-colors duration-300">
                  <FiMail />
                </div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="w-full p-3 pl-12 rounded-lg bg-gray-800/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-gray-600"
                  placeholder="admin@company.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs font-medium mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-gray-300 font-medium text-sm block">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-red-500 transition-colors duration-300">
                  <FiLock />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full p-3 pl-12 pr-12 rounded-lg bg-gray-800/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-gray-600"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-red-400 transition-colors duration-300"
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs font-medium mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-700 to-red-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-red-700/20 transition duration-300 flex items-center justify-center mt-8 border border-red-800/30 hover:from-red-600 hover:to-red-700 transform hover:-translate-y-0.5 active:translate-y-0"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
                    ></path>
                  </svg>
                  <span>Authenticating...</span>
                </div>
              ) : (
                <span>Access Admin Panel</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
