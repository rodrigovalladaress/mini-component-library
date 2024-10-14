import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const ICON_SIZE = 24;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>

      <DisplayedSelect>
        <span>{displayedValue}</span>

        <IconWrapper style={{ "--icon-size": `${ICON_SIZE}px` }}>
          <Icon id="chevron-down" strokeWidth={2} size={ICON_SIZE} />
        </IconWrapper>
      </DisplayedSelect>
    </Wrapper>
  );
};

export default Select;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  inset: 0;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: var(--icon-size);
  height: var(--icon-size);
  margin-block: auto;
`;

const DisplayedSelect = styled.div`
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  width: fit-content;
  pointer-events: none;

  ${NativeSelect}:focus + & {
    outline: 2px solid #3322aa;
    outline: 2px auto -webkit-focus-string-color;
  }
`;
