import { Banner, LoginForm } from "./components";
import { StyledContainer } from "./styles";
import { useSelector } from "react-redux";
import { UserState } from "@/store/slice/userSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Login = (): JSX.Element => {
  const route = useRouter();
  
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      route.push("/dashboard");
    }
  }, [route]);

  return (
    <StyledContainer>
      <Banner />
      <LoginForm />
    </StyledContainer>
  );
};

export default Login;
