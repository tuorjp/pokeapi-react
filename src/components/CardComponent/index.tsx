import { Box } from "@mui/material"

export interface CardComponentProps {
    title?: string
}

export function CardComponent({ title }:CardComponentProps) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', boxShadow: 4, borderRadius: 2, py: 0.4, px: 1.4, fontSize: 20, color: '#fff', bgcolor: '#0e7490' }}>
            { title }
        </Box>
    )
}