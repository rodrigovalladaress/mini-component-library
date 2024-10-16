/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0",
    "--wrapper-border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0",
    "--wrapper-border-radius": "4px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--wrapper-border-radius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper style={{ ...SIZES[size] }}>
      <VisuallyHidden>
        <label for="progress-label">Progress</label>
      </VisuallyHidden>

      <BarTrimmer>
        <Bar
          id="progress-label"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          role="progressbar"
          style={{
            "--valuenow": `${value}%`,
            ...SIZES[size],
          }}
        >
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarTrimmer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: var(--height);
  max-width: 370px;
  padding: var(--padding);
  border-radius: var(--wrapper-border-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarTrimmer = styled.div`
  border-radius: var(--wrapper-border-radius);
  /* Trim off corners when progress bar is near full */
  overflow: clip;
  height: 100%;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: var(--valuenow);
`;

export default ProgressBar;
