import React from "react";
import Dashboard from "./screens/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Left_Sidebar, Right_Sidebar } from "./components";

export default function App() {
  return (
    <Router>
      <Dashboard
        leftSidebar={<Left_Sidebar />}
        rightSidebar={<Right_Sidebar />}
      />
    </Router>
  );
}
