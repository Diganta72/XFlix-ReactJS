import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import Videos from "./components/Videos";
import VideoDetails from "./components/VideoPage";
import ScrollToTop from "./utils/ScrollToTop";

export const config = {
  endpoint: "https://xflix-backend-nodejs.onrender.com/v1/videos",
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Box sx={{ backgroundColor: "#181818" }}>
        <Routes>
          <Route path="/" exact element={<Videos/>} />
          <Route path="/video/:id" element={<VideoDetails/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
