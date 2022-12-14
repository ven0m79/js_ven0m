import styled, {css} from "styled-components";


const outlinedButtonStyle = css`
  border: 1px solid red;
`
export const ButtonStyled = styled.button`
  background-color: #fff100;
  color: #dc0202;
  border: none;
  outline: none;
  box-shadow: ${({theme}) => theme.$shadowsXl};
  font-size: ${({theme}) => theme.$fontXl};
  height: ${({height}) => height + "px"};
  ${({variant}) => variant === "outlined" ? outlinedButtonStyle : ""}
  
`;