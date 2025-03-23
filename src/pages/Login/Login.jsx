import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate, NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { authApi } from "../../redux/features/auth/authApi";
import { decodeToken } from "../../utilities/decodeToken";
import { setUser } from "../../redux/features/auth/authSlice";
import { FiMail, FiLock, FiShield } from "react-icons/fi";

const LoginPage = () => {
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
      email: "sumon.devcoder@gmail.com",
      password: "Sumon25%"
    }
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

        toast.success("Login successful! Welcome back", {
          id: toastId,
          duration: 3000,
        });

        navigate("/admin");
      }
    } catch (err) {
      console.log('err', err?.data?.error);
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#3C3F93] to-[#1c05b1] flex items-center justify-center p-6">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTgtLjk2OCAyLjE5OC0yLjE5OCAwLTEuMjMtLjk2OC0yLjE5OC0yLjE5OC0yLjE5OC0xLjIzIDAtMi4xOTguOTY4LTIuMTk4IDIuMTk4IDAgMS4yMy45NjggMi4xOTggMi4xOTggMi4xOTh6bTAgMzZjMS4yMyAwIDIuMTk4LS45NjggMi4xOTgtMi4xOTggMC0xLjIzLS45NjgtMi4xOTgtMi4xOTgtMi4xOTgtMS4yMyAwLTIuMTk4Ljk2OC0yLjE5OCAyLjE5OCAwIDEuMjMuOTY4IDIuMTk4IDIuMTk4IDIuMTk4em0tMTgtMThjMS4yMyAwIDIuMTk4LS45NjggMi4xOTgtMi4xOTggMC0xLjIzLS45NjgtMi4xOTgtMi4xOTgtMi4xOTgtMS4yMyAwLTIuMTk4Ljk2OC0yLjE5OCAyLjE5OCAwIDEuMjMuOTY4IDIuMTk4IDIuMTk4IDIuMTk4eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iMTgiIGN5PSIxOCIgcj0iMSIvPjxjaXJjbGUgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSIzNiIgY3k9IjM2IiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="grid md:grid-cols-5 max-w-6xl w-full relative z-10">
        {/* Left image panel */}
        <div className="hidden md:flex md:col-span-2 bg-gradient-to-br from-[#2a2d69]/80 to-[#15037e]/80 rounded-l-3xl backdrop-blur-md relative overflow-hidden border-r border-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full absolute opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"/>
                  </pattern>
                  <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#smallGrid)"/>
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative z-10 p-12 text-center">
              <div>
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <FiShield className="text-white text-4xl" />
                  </div>
                </div>
                <h2 className="text-white text-3xl font-bold mb-6">Welcome Back</h2>
                <p className="text-gray-300 mb-8">
                  Sign in to access your account and continue your digital journey with us.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <FiShield className="text-white text-xl" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold">Secure Login</h3>
                    <p className="text-gray-300 text-sm">Your account is protected with advanced security</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <FiLock className="text-white text-xl" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold">Privacy First</h3>
                    <p className="text-gray-300 text-sm">Your data is always encrypted and private</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right form panel */}
        <div className="col-span-5 md:col-span-3 bg-white/10 backdrop-blur-xl p-8 md:rounded-r-3xl rounded-3xl md:rounded-l-none shadow-2xl border border-white/20">
          <div className="max-w-md mx-auto">
            <div className="flex justify-center md:justify-start">
              <div className="bg-white/10 backdrop-blur-xl p-3 rounded-xl shadow-lg border border-white/20 mb-6">
                <h1 className="text-white text-xl font-bold">Login</h1>
              </div>
            </div>

            <h2 className="text-white text-3xl font-bold mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-300 mb-8">
              Sign in to your account to continue
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-white font-medium block">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    })}
                    className="w-full p-4 pl-12 rounded-xl bg-white/15 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-300 border border-white/10"
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-300 text-sm font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field with Show/Hide Toggle */}
              <div className="space-y-2">
                <label className="text-white font-medium block">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="w-full p-4 pl-12 pr-12 rounded-xl bg-white/15 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-300 border border-white/10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {showPassword ? (
                      <IoMdEye className="text-xl" />
                    ) : (
                      <IoMdEyeOff className="text-xl" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-300 text-sm font-medium">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <NavLink to="/forgot-password" className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
                  Forgot Password?
                </NavLink>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1c05b1] to-[#3C3F93] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center mt-6 border border-white/10"
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
                    <span>Logging in...</span>
                  </div>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Don't have an account?{" "}
                <NavLink
                  to="/register"
                  className="text-white font-semibold hover:text-blue-200 transition-colors duration-300 underline"
                >
                  Sign Up
                </NavLink>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-center text-gray-400">
                By logging in, you agree to our
                <a href="#" className="text-white ml-1 hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-white hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;