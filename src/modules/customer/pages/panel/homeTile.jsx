import React from 'react'
import {Avatar, Box, Button, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import Profile from '../../../../assets/images/gianluigibuffon.jpg';
import {Call, RateReview} from "@mui/icons-material";
import BottomAppBar from "../../../../components/navBar/index.jsx";
import ServiceTile from "../../../../constant/serviceTile";

function HomeTile() {
    const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const callButton = {
        width: {xs:'49%', md: '20%'},
        backgroundColor: '#113A5F',
        color: '#66B1E2',
        borderRadius: '16px',
        fontSize: isTablet? '11px': '14px',
        marginRight: !isTablet && '5px',
    }
    const messageButton = {
        width: {xs:'49%', md: '20%'},
        borderRadius: '16px',
        fontSize: isTablet? '11px': '14px',
    }
  return (
    <Box component={'section'} p={4}>
      <Grid container mb={2}>
        <Grid item xs={12}>
            <Stack spacing={1}>
                <Typography variant={'h5'} fontWeight={500} color={'info.main'}>{'بهنام مقدسیان'}</Typography>
                <Typography variant={'p'} fontSize={'12px'} color={'#60666B'}>{'خوش‌ آمدید'}</Typography>
            </Stack>
        </Grid>
          <Grid container mt={2}>
             <Grid item xs={12}>
                 <Stack spacing={2} sx={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px'}}>
                     <Stack direction={'row'} justifyContent={!isTablet && 'center'} alignItems={'center'}>
                         <Box
                             width={'58px'}
                             height={'65px'}
                             component={'img'}
                             src={Profile}

                             sx={{ border: 2, borderColor: '#CC9D5F', borderRadius: '0 0 30px 30px'}}
                         />
                         <Typography variant={'h6'} fontWeight={500} mr={1}>{'بهنام مقدسیان'}</Typography>
                     </Stack>
                     <Stack direction={'row'} justifyContent={{xs: 'space-between', md: 'center'}}>
                         <Button variant="contained" sx={messageButton}>{'ارسال پیام'}</Button>
                         <Button
                             variant="contained"
                             sx={callButton}
                             startIcon={<Call sx={{ marginLeft: '10px', color: '#66B1E2'}} />}
                         >{'تماس امن'}</Button>
                     </Stack>
                 </Stack>
             </Grid>
          </Grid>
          <Grid container>
              <Grid item xs={12}>
                  <Stack my={2}>
                      <Typography variant={'subtitle2'} fontSize={'12px'} fontWeight={500} color={'#60666B'}>{'خدمات اختصاصی (25 آیتم)'}</Typography>
                  </Stack>
                  <ServiceTile/>
              </Grid>
          </Grid>
      </Grid>
        <BottomAppBar/>
    </Box>
  )
}

export default HomeTile