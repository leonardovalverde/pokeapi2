import { theme } from "@/GlobalStyles";
import { useLoginMutation } from "@/services/user/user";
import { setUser } from "@/store/slice/userSlice";
import { Box, Button, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginSchema } from "./validations";

const LoginForm = (): JSX.Element => {
  const route = useRouter();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      login(values);
      dispatch(
        setUser({
          id: 1,
          email: values.email,
          name: "Leonardo Valverde",
          token:
            "eyJlbWFpbCI6ImxlY29uYXJkb3ZlbG9yZGVAdGVzdC5jb20iLCJpYXQiOjE2MzI1NjY0NzMsImV4cCI",
        })
      );
      route.push("/dashboard");
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "400px",
          padding: `${theme.spacing(0)} ${theme.spacing(4)}`,
          "@media (max-width: 1280px)": {
            height: "auto",
          },
          "@media (max-width: 450px)": {
            width: "80%",
          },
        }}
      >
        <Typography variant="h4" color={grey[900]} mb={theme.spacing(2)}>
          Bem vindo de volta!
        </Typography>
        <Typography color={grey[500]}>
          Tenha acesso a dados de vários pokemons, basta logar!
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de e-mail"
            name="email"
            autoFocus
            onChange={handleChange}
            value={values.email}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            onChange={handleChange}
            value={values.password}
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
