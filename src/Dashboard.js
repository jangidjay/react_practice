import React from "react";
import { logout } from "./firebase-config";

const Dashboard = () => {
  return (
    <div>
      <button onClick={() => logout()}>SignOut</button>
    </div>
  );
};

export default Dashboard;
