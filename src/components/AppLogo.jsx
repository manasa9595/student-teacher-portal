import React from "react";
import { useNavigate } from "react-router-dom";

const AppLogo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="text-blue-600 font-bold text-lg cursor-pointer flex items-center"
      onClick={() => navigate("/student")}
    >
      <img src="/applogo.png" alt="Logo" className="h-8" />
      <span>Student Teacher Portal</span>
    </div>
  );
};

export default AppLogo;
