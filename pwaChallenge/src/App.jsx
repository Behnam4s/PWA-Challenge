import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Box, Button, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import theme from './style/theme'
import AppRoute from "./routes/index.jsx";

function App() {
  const navigate = useNavigate()

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box component={'section'} sx={{ height: '100vh'}}>
            <Box>
                <Link to={'/login'}>{'enter'}</Link>
            </Box>
            <AppRoute/>
        </Box>
    </ThemeProvider>
  )
}

export default App
