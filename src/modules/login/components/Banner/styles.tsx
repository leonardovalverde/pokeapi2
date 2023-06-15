import { indigo } from "@mui/material/colors";
import { styled } from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  background-color: ${indigo[500]};
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

export { ImageWrapper };
