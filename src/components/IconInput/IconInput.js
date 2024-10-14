import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    "--border-width": "1px",
    "--font-size": "0.875rem",
    "--padding": "4px 24px 3px",
  },
  large: {
    "--border-width": "2px",
    "--font-size": "1.125rem",
    "--padding": "8px 36px 5px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "small" ? 16 : 24;

  return (
    <Wrapper style={{ "--width": `${width}px` }}>
      <Input
        style={{ ...STYLES[size] }}
        placeholder={placeholder}
        label={label}
      />

      <IconWrapper style={{ "--icon-size": `${iconSize}px` }}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>

      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Input = styled.input`
  border: none;
  box-shadow: none;
  border-block-end: var(--border-width) solid black;
  font-size: var(--font-size);
  font-weight: 700;
  padding: var(--padding);
  width: 100%;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: 500;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: black;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--icon-size);
  height: var(--icon-size);
  margin-block: auto;
  pointer-events: none;
  color: ${COLORS.gray700};

  ${Input}:hover + & {
    color: black;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
`;

export default IconInput;
