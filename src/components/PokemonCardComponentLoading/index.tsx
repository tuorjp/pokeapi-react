import { Grid, Skeleton } from "@mui/material"

export function CardComponentLoading() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={3} display={"flex"} justifyContent={"center"}>
                <Skeleton variant="circular" width={140} height={140} />
            </Grid>
            <Grid item xs={6} md={3} display={"flex"} justifyContent={"center"}>
                <Skeleton variant="circular" width={140} height={140} />
            </Grid>
            <Grid item xs={6} md={3} display={"flex"} justifyContent={"center"}>
                <Skeleton variant="circular" width={140} height={140} />
            </Grid>
            <Grid item xs={6} md={3} display={"flex"} justifyContent={"center"}>
                <Skeleton variant="circular" width={140} height={140} />
            </Grid>
            <Grid item xs={6} md={3} display={"flex"} justifyContent={"center"}>
                <Skeleton variant="circular" width={140} height={140} />
            </Grid>
            <Grid item xs={6} md={3} display={"flex"} justifyContent={"center"}>
                <Skeleton variant="circular" width={140} height={140} />
            </Grid>
            <Grid item xs={6} md={3} display={"flex"} justifyContent={"center"}>
                <Skeleton variant="circular" width={140} height={140} />
            </Grid>
            <Grid item xs={6} md={3} display={"flex"} justifyContent={"center"}>
                <Skeleton variant="circular" width={140} height={140} />
            </Grid>
        </Grid>
    )
}