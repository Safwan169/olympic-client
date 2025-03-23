import { useCallback } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

const useHandleLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(
    async ({ refetch } = {}) => {
      try {
        await dispatch(logout());

        if (typeof refetch === "function") {
          await refetch();
        }

        navigate("/");
        toast.success("Logout Successful");
      } catch (err) {
        toast.error("Logout Failed. Please try again.");
        console.error("logout error", err);
      }
    },
    [dispatch, navigate]
  );

  return { handleLogout };
};

export default useHandleLogout;
