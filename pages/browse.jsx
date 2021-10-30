import React from "react";
import Link from "next/link";
import { logOut } from "../libs/AuthHelper";
import RouteProtector from "../components/RouteProtector";
import MyHead from "../components/MyHead";

export default function Browse() {
  return (
    <>
      <MyHead title="Browse Page - Animidle" />
      <RouteProtector
        unLoggedPath="/signin"
        message="You must loged in to browse this page"
      />
      <div className="browse-page">
        <h2>Welcome to Browse Page</h2>
        <Link href="/">Home</Link>
      </div>
    </>
  );
}
