import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export interface CardComponentProps {
    title?: string
    image?: string
}

export function CardComponent({ title, image }: CardComponentProps) {
    return (
        <Card sx={{ maxWidth: 400, p: 2 }}>
            <CardContent sx={{ display: "flex", justifyContent: "center", color: "#2563eb" }}>
                <Typography gutterBottom variant="h5">
                    {title?.toUpperCase()}
                </Typography>
            </CardContent>
            {image ? (
                <CardMedia
                    sx={{ height: 400, backgroundSize: "auto", backgroundPosition: "center", backgroundRepeat: "no-repeat", transform: "scale(2.5)" }}
                    image={image}
                    title={title?.toUpperCase()}
                />
            ) : (
                <CardMedia
                    sx={{ height: 140, backgroundColor: "#f0f0f0" }}
                    title="Image Not Available"
                >
                    <Typography variant="subtitle1" color="textSecondary" align="center">
                        No Image
                    </Typography>
                </CardMedia>
            )}
            <CardActions sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                <Button size="medium" variant="contained">See more</Button>
            </CardActions>
        </Card>
    )
}