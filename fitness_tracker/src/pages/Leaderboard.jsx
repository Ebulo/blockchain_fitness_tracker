import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import "../css/additional-styles/leaderboard.css";
import { rankings } from "../utils/rankings";

export const Leaderboard = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const leaderList = rankings;

  console.log("We are inside the Leaderboard", rankings);
  return (
    <div className="flex">
      <Sidebar
        className="pos-fixed"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* Sidebar */}

      {/* Content area */}
      <main className="relative flex flex-col overflow-y-auto overflow-x-hidden align-middle justify-center">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/*  Site header */}
        <div className="main">
          <div id="header">
            <h1>Ranking (Concept)</h1>
            <button className="share justify-center flex">
              <img
                width="38"
                height="38"
                src="https://img.icons8.com/external-filled-outline-lima-studio/64/external-etherium-digital-asset-filled-outline-lima-studio.png"
                alt="external-etherium-digital-asset-filled-outline-lima-studio"
              />
            </button>
          </div>
          <div id="leaderboard">
            <div className="ribbon"></div>
            <table>
              {leaderList.map((el) => (
                <tr>
                  <td className="number">{el.rank}</td>
                  <td className="name">{el.name}</td>
                  <td className="points">{el.points}</td>
                </tr>
              ))}
            </table>
            {/* <div id="buttons">
              <button className="exit">Exit</button>
              <button className="continue">Continue</button>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};
