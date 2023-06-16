import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Socials from "./pages/Socials";
import { Leaderboard } from "./pages/Leaderboard";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dashboard/analytics" element={<Dashboard />} />
        <Route exact path="/community/feed" element={<Socials />} />
        <Route exact path="/community/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}

export default App;
