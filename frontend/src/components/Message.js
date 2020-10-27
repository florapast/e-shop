import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant = "primary", children }) => {
  return (
    <Alert dismissible variant={variant}>
      {children}
    </Alert>
  );
};

export default Message;
