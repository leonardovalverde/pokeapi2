import { Banner, LoginForm } from "./components";
import { StyledContainer } from "./styles";

const Login = (): JSX.Element => {
  return (
    <StyledContainer>
      <Banner />
      <LoginForm />
    </StyledContainer>
  );
};

export default Login;
