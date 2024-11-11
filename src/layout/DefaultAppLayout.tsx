import { Box, Typography } from "@mui/material"
import { Outlet } from "react-router-dom"

export default function DefaultAppLayout() {
  return (
    <Box sx={{
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column"
    }}
    >
      <Box sx={{ 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "center", 
        background: "#dc2626",
        py: 2,
        px: 6
        }}
      >
        <Typography variant="h1" color={"#fff"}>Pokemón Gallery</Typography>
      </Box>
      <Box sx={{ flexDirection: "column", px: 6, py: 2 }}>
        <Outlet />
      </Box>
    </Box>
  )
}