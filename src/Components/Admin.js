import React from "react";
import DetailedAdmin from "./DetailedAdmin";
import NavAdmin from "./NavAdmin";
const Admin = () => {
  return (
    <div className="flex">
      <NavAdmin />
      <DetailedAdmin />
    </div>
  );
};

export default Admin;
