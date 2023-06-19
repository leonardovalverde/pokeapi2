import { useRouter } from "next/router";
import { AuthProps } from "./types";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useSelector } from "react-redux";
import { UserState } from "@/store/slice/userSlice";

const Auth = ({ children }: AuthProps) => {
  const token = useSelector((state: UserState) => state.user.token);
  const router = useRouter();

  if (router.pathname === "/login" && token) {
    router.push("/dashboard");
    return <LoadingScreen />;
  } else if (!token && router.pathname !== "/login") {
    router.push("/login");
    return <LoadingScreen />;
  } else if (token || router.pathname === "/login") {
    return <>{children}</>;
  }
  router.push("/login");
  return <LoadingScreen />;
};

export default Auth;
