import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import theme from './style/theme'
import AppRoute from "./routes/index.jsx";

function App() {


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box component={'section'} sx={{ height: '100vh'}}>
            <AppRoute/>
        </Box>
    </ThemeProvider>
  )
}

export default App
