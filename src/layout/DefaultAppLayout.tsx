import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function DefaultAppLayout() {
  return (
    <Box sx={{display: 'flex', minHeight: '100vh', flexDirection: 'column', px: 4, py: 2}}>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <h1>Pokemon Gallery</h1>
      </Box>
      <Outlet />
    </Box>
  )
}