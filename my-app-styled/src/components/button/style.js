import styled, {css, keyframes} from "styled-components";


const outlinedButtonStyle = css`
  border: 1px solid red;
  `
const rotate = keyframes`
from {
  transform: rotate(0deg);
}
  to {
    transform: rotate(360deg);
  }
`;
export const ButtonStyled = styled.button`
  background-color: #fff100;
  color: #338a93;
  border: none;
  outline: none;
  box-shadow: ${({theme}) => theme.$shadowsXl};
  font-size: ${({theme}) => theme.$fontXl};
  height: ${({height}) => height + "px"};
  ${({variant}) => variant === "outlined" ? outlinedButtonStyle : ""};
  animation: ${rotate} 1000ms infinite ease;
`;