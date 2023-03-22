import React from 'react'
import {Box, Grid, Stack, Typography} from "@mui/material";
import ErrorPic from '../../assets/images/404.jpg'
function page404() {
  return (
    <Box component={'section'} sx={{ height: '100vh'}}>
      <Grid container justifyContent={'center'} alignItems={'center'} sx={{ height: '100%'}}>
         <Typography variant={'h1'}>
           {'صفحه موردنظر یافت نشد !'}
         </Typography>
      </Grid>
    </Box>
  )
}

export default page404