import React from "react";
import Loader from "./Loader";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Loader />
      {children}
    </div>
  );
}
