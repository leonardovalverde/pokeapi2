import { Banner, LoginForm } from "./components";
import { StyledContainer } from "./styles";
import { useSelector } from "react-redux";
import { UserState } from "@/store/slice/userSlice";
import { useEffect } from "react";

const Login = (): JSX.Element => {
  const userData = useSelector((state: UserState) => state.user);

  useEffect(() => {
    if (userData.token) {
      window.location.href = "/dashboard";
    }
  }, [userData]);

  return (
    <StyledContainer>
      <Banner />
      <LoginForm />
    </StyledContainer>
  );
};

export default Login;
