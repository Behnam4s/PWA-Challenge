import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Grid, Stack, Typography} from "@mui/material";
import {ChatBubbleOutline, Home, Notifications, Person} from "@mui/icons-material";



const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});
const navBarItemStyle = {
    color: '#60666B',
}
const homeItemStyle = {
    color: '#2C7ABF',
}

export default function BottomAppBar() {
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0, backgroundColor: '#E5E6E6' }}>
                <Toolbar>
                   <Grid container>
                       <Grid item xs={3} container flexDirection={'column'} alignItems={'center'}>
                           <IconButton sx={homeItemStyle} aria-label="open drawer">
                                <Home/>
                           </IconButton>
                           <Typography sx={homeItemStyle}>{'خانه'}</Typography>
                       </Grid>
                       <Grid item xs={3} container flexDirection={'column'} alignItems={'center'}>
                           <IconButton sx={navBarItemStyle} aria-label="open drawer">
                                 <ChatBubbleOutline/>
                           </IconButton>
                           <Typography sx={navBarItemStyle}>{'پیا‌م‌ها'}</Typography>
                       </Grid>
                       <Grid item xs={3} container flexDirection={'column'} alignItems={'center'}>
                           <IconButton sx={navBarItemStyle} aria-label="open drawer">
                                 <Notifications/>
                           </IconButton>
                           <Typography sx={navBarItemStyle}>{'اطلاعیه‌ها'}</Typography>
                       </Grid>
                       <Grid item xs={3} container flexDirection={'column'} alignItems={'center'}>
                           <IconButton sx={navBarItemStyle} aria-label="open drawer">
                                <Person/>
                           </IconButton>
                       <Typography sx={navBarItemStyle}>{'پروفایل'}</Typography>
                       </Grid>
                   </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}
