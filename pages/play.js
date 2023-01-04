import {Box, Button, Container, CssBaseline, Grid, Paper, Toolbar} from "@mui/material";
import CustomDrawer from "../components/customDrawer";
import ResponsiveAppBar from "../components/responsiveAppBar";
import DartBoard from "../components/dartBoard";
import RightScoreBoxes from "../components/rightScoreBoxes";
import Typography from "@mui/material/Typography";
import LeftScoreBoxes from "../components/leftScoreBoxes";


export default function Play() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <ResponsiveAppBar/>
            <CustomDrawer/>
            <Box component="main" sx={{flexGrow: 1, p: 3 }}>
                <Toolbar/>
                <Grid container spacing={2}>


                    <LeftScoreBoxes/>


                    <Grid item xs={10}>
                        <Container style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <DartBoard/>
                        </Container>
                    </Grid>

                    <RightScoreBoxes/>


                    <Grid item xs={1}>
                        <Button color={"error"} size={"large"} variant="contained" style={{width: "100%", height: "100%"}}>Reset Game</Button>
                    </Grid>


                    <Grid item xs={10}>
                        <Grid container columns={10} spacing={3} justifyContent={"center"} alignItems={"center"} direction={"row"}>
                            <Grid item xs={1}/>
                            <Grid item xs={1}/>
                            <Grid item xs={1}/>



                            <Grid item xs={1}>
                                <Typography variant={"h4"} color="grey" width="100%" justifySelf={"center"}>Alex</Typography>
                                <Paper elevation={3} style={{margin: 0, height: "80px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={"h3"} color={"error"}>{286}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={1}>
                                <Typography variant={"h4"} color="grey">Philip</Typography>
                                <Paper elevation={3} style={{margin: 0, height: "80px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={"h3"} color={"error"}>{301}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={1}>
                                <Typography variant={"h4"} color="grey">P3</Typography>
                                <Paper elevation={3} style={{margin: 0, height: "80px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={"h3"} color={"error"}>{301}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={1}>
                                <Typography variant={"h4"} color="grey">P4</Typography>
                                <Paper elevation={3} style={{margin: 0, height: "80px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={"h3"} color={"error"}>{301}</Typography>
                                </Paper>
                            </Grid>



                            <Grid item xs={1}/>
                            <Grid item xs={1}/>
                            <Grid item xs={1}/>


                        </Grid>
                    </Grid>

                    <Grid item xs={1}>
                        <Button color={"success"} size={"large"} variant="contained" style={{width: "100%", height: "100%"}}>Next Player</Button>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}
