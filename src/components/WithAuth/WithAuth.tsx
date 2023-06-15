import { useRouter } from "next/router";
import { UserState } from "@/store/slice/userSlice";
import { useSelector } from "react-redux";
import { AuthProps } from "./types";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Auth = ({ children }: AuthProps) => {
  const router = useRouter();
  const userData = useSelector((state: UserState) => state.user);

  if (userData.token) return <>{children}</>;
  else if (!userData.token && router.pathname !== "/login") {
    router.push("/login");
    return <LoadingScreen />;
  }
  return <>{children}</>;
};

export default Auth;
