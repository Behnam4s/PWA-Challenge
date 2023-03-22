import React from 'react'
import {Avatar, Box, Button, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import Profile from '../../../../assets/images/gianluigibuffon.jpg';
import {Call, RateReview} from "@mui/icons-material";
import Car from '../../../../assets/images/car.png';
import ArtBoard from '../../../../assets/images/Artboard.png';
import Boxes from '../../../../assets/images/box.png';
import Calendar from '../../../../assets/images/calander.png';
import Check from '../../../../assets/images/check.png';
import CreditCard from '../../../../assets/images/creditCard.png';
import Department from '../../../../assets/images/department.png';
import Flight from '../../../../assets/images/flight.png';
import Doctor from '../../../../assets/images/doctor.png';
import Insure from '../../../../assets/images/insure.png';
import Receipt from '../../../../assets/images/reciep.png';
import Transfer from '../../../../assets/images/transfer.png';
import BottomAppBar from "../../../../components/navBar/index.jsx";

function HomeTile() {
    const serviceList= [

        {
            pic: ArtBoard,
            title: 'صندوق امانات',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Flight,
            title: 'لانژ اختصاصی فرودگاه',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Doctor,
            title: 'بیمه درمانی',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Car,
            title: 'بیمه خودرو',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Insure,
            title: 'نرخ و شرایط سپرده',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Transfer,
            title: 'ترنسفر فرودگاهی',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Boxes,
            title: 'ترنسفر فرودگاهی',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Transfer,
            title: 'بیمه مسافرتی',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: CreditCard,
            title: 'صدور کارت بانکی',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Check,
            title: 'مدیریت چک',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Receipt,
            title: 'گزارش مالی',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
        {
            pic: Department,
            title: 'رزرو هتل',
            desc: 'تحویل صندوق امانات به شما در شعبه دلخواه شما در تهران، مشهد، اصفهان و شیراز',
        },
    ]
    const isTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const serviceStyle = {
        width: '100%',
    }
    const callButton = {
        width: '49%',
        backgroundColor: '#113A5F',
        color: '#66B1E2',
        borderRadius: '16px',
        fontSize: isTablet? '11px': '14px',
    }
    const messageButton = {
        width: '49%',
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
                     <Stack direction={'row'} alignItems={'center'}>
                         <Box
                             width={'58px'}
                             height={'65px'}
                             component={'img'}
                             src={Profile}
                             sx={{ border: 2, borderColor: '#CC9D5F', borderRadius: '0 0 30px 30px'}}
                         />
                         <Typography variant={'h6'} fontWeight={500} mr={1}>{'بهنام مقدسیان'}</Typography>
                     </Stack>
                     <Stack direction={'row'} justifyContent={'space-between'}>
                         <Button
                             variant="contained"
                             sx={messageButton}
                         >
                             {'ارسال پیام'}
                         </Button>
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
                  <Grid container>
                      {
                          serviceList?.map( items=> (
                          <Grid item container  alignItems={'center'} justifyContent={'center'} my={2} xs={12} sx={{ cursor: 'pointer'}}>
                              <Stack direction={'row'} sx={isTablet && serviceStyle }>
                                  <Box
                                      width={'48px'}
                                      height={'48px'}
                                      component={'img'}
                                      src={items.pic}
                                  />
                                  <Stack spacing={1} mr={3} flexGrow={1}>
                                      <Typography fontSize={'16px'} fontWeight={500}>{items.title}</Typography>
                                      <Typography fontSize={'13px'} fontWeight={400}>{items.desc}</Typography>
                                  </Stack>
                              </Stack>
                          </Grid>
                          ))
                      }
                  </Grid>

              </Grid>
          </Grid>
      </Grid>
        <BottomAppBar/>
    </Box>
  )
}

export default HomeTile