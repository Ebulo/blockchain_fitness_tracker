import React, { useState, useContext } from "react";
import { Box, useMediaQuery } from "@mui/material";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import PostWidget from "../partials/socials/PostWidget";
import MyPostWidget from "../partials/socials/MyPostWidget";
import { TransactionContext } from "../context/TransactionContext";
import AllPostsWidget from "../partials/socials/PostsWidget";

const Socials = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const value = useContext(TransactionContext);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <Box>
            <Box
              width="100%"
              padding="2rem 6%"
              display={isNonMobileScreens ? "flex" : "block"}
              gap="0.5rem"
              justifyContent="center"
              overflow="scroll"
            >
              {/**Actual Posts */}
              <Box
                flexBasis={isNonMobileScreens ? "60%" : undefined}
                mt={isNonMobileScreens ? undefined : "1.5rem"}
              >
                <MyPostWidget />
                <AllPostsWidget />
              </Box>
            </Box>
          </Box>
        </main>
      </div>
    </div>
  );
};

export default Socials;
