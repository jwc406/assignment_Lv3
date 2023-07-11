import React from "react";

import { StButton } from "../styles/theme";

export default function Button({ children, icon, ...rest }) {
  return (
    <StButton {...rest}>
      {children}
      {icon}
    </StButton>
  );
}
