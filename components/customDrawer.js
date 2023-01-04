import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

const drawerWidth = 240;

export default function CustomDrawer() {
    return(
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <Link href="/play" style={{textDecoration: "none", color: 'inherit'}}>
                        <ListItem key='Play' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PlayCircleOutlineIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Play' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="/results" style={{textDecoration: "none", color: 'inherit'}}>
                        <ListItem key='Results' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DataThresholdingIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Results' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="/community" style={{textDecoration: "none", color: 'inherit'}}>
                        <ListItem key='Community' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PeopleIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Community' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="/settings" style={{textDecoration: "none", color: 'inherit'}}>
                        <ListItem key='Settings' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Settings' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
