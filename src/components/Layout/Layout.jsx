import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Box as="main">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;