import {Box, CssBaseline, Toolbar} from "@mui/material";
import ResponsiveAppBar from "../components/responsiveAppBar";
import CustomDrawer from "../components/customDrawer";
import Typography from "@mui/material/Typography";

export default function Results() {
    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <ResponsiveAppBar/>
            <CustomDrawer/>
            <Box component="main" sx={{flexGrow: 1, p: 3 }}>
                <Toolbar/>
                <Typography variant="h1">Results Page</Typography>
            </Box>
        </Box>
    )
}
