import React from "react";

export default function FlexBox({ className = "", children }) {
  return (
    <div
      className={
        "d-flex justify-content-between align-items-center " + className
      }
    >
      {children}
    </div>
  );
}
