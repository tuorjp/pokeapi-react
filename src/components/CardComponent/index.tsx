import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export interface CardComponentProps {
    title?: string
    image?: string
}

export function CardComponent({ title, image }: CardComponentProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {image ? (
                <CardMedia
                    sx={{ height: 140 }}
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
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title?.toUpperCase()}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                <Button size="small">Ver mais</Button>
            </CardActions>
        </Card>
    )
}