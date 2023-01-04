import {Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";


const displays = ["Best", "Worst"];
const values = ["15", "0"];

const displays2 = ["Last", "Best"]

export default function LeftScoreBoxes() {
    return(
        <Grid item xs={1} style={{height: "100%"}}>
            <Grid container columns={1} spacing={1}>

                {displays.map((display, index) => (
                        <Grid key={display} item xs={1}>
                            <Typography variant={"h4"} color="grey">{display}</Typography>
                            <Paper elevation={3} style={{margin: 0, height: "80px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Typography variant={"h3"} color={"error"}>{values[index]}</Typography>
                            </Paper>
                        </Grid>
                    )
                )}

                <Grid item xs={1}>
                </Grid>



            </Grid>
        </Grid>
    )
}
