import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem;
  height: -2.75rem;
  font-size: 1rem;
  border: 1px solid;
  background: none;

  /* 색상 */
  ${(props) => {
    const selected = props.theme.palette[props.color];
    return css`
      border-color: ${selected};
      color: ${selected};
      &:hover {
        border-color: ${lighten(0.1, selected)};
        background-color: ${selected};
        color: ${darken(0.5, selected)};
      }
      &:active {
        border-color: ${darken(0.1, selected)};
        color: ${darken(0.1, selected)};
      }
    `;
  }}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  color: "green",
};

export default Button;
