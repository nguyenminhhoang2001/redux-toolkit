import React from "react";
import { Outlet } from "react-router-dom";
import Main from "./component/Main";

const Admin = () => {
  return (
    <div>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Admin;
