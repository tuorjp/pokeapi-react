import { Box } from "@mui/material";
import { ReactNode } from "react";

type ContainerCardProps = {
    children: ReactNode
}

export function ContainerCardComponent({ children }: ContainerCardProps) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 1,
                bgcolor: "#FFF",
                boxShadow: 4,
                borderRadius: 2,
                p: 4
            }}
        >
            <Box>{children}</Box>
        </Box>
    )
}