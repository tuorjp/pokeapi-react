import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export interface CardComponentProps {
    title?: string
    image?: string
}

export function CardComponent({ title, image }: CardComponentProps) {
    const navigate = useNavigate()

    return (
        <Box 
            sx={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                border: "none", 
                background: "#fff",
                justifyContent: "center"
            }}
            component={"button"}
            onClick={() => navigate(`/${title}`)}
        >
            <motion.div
                initial={{ borderWidth: "1px", width: 140, height: 140 }}
                whileHover={{ borderWidth: "3px", width: 160, height: 160, border: "3px solid #dc2626" }}
                transition={{ duration: 0.3 }}
                style={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    border: "1px solid #000",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    cursor: "pointer",
                }}
            >
                <motion.img
                    src={image}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <motion.div
                    initial="initial"
                    whileHover="hover"
                    variants={{
                        hover: { opacity: 1 },
                        initial: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: "absolute",
                        borderRadius: "50%",
                        background: "rgba(0, 0, 0, 0.6)",
                        color: "white",
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                        padding: "4px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Typography variant="caption">{title?.toUpperCase()}</Typography>
                </motion.div>
            </motion.div>
        </Box>
    )
}