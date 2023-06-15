import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um endenreço de email válido")
    .required("O endereço de email é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});

export { loginSchema };
