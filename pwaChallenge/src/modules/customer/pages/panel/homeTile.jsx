import React from 'react'
import {Avatar, Box, Button, Grid, Stack, Typography} from "@mui/material";
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

function HomeTile() {
    const serviceList= [

        {
            pic: ArtBoard,
            text: 'صندوق امانات',
        },
        {
            pic: Flight,
            text: 'لانژ اختصاصی فرودگاه',
        },
        {
            pic: Doctor,
            text: 'بیمه درمانی',
        },
        {
            pic: Car,
            text: 'بیمه خودرو',
        },
        {
            pic: Insure,
            text: 'نرخ و شرایط\n' +
                'سپرده',
        },
        {
            pic: Transfer,
            text: 'ترنسفر فرودگاهی',
        },
        {
            pic: Boxes,
            text: 'ترنسفر فرودگاهی',
        },
        {
            pic: Transfer,
            text: 'بیمه مسافرتی',
        },
        {
            pic: CreditCard,
            text: 'صدور کارت بانکی',
        },
        {
            pic: Check,
            text: 'مدیریت چک',
        },
        {
            pic: Receipt,
            text: 'گزارش مالی',
        },
        {
            pic: Department,
            text: 'رزرو هتل',
        },
    ]
  return (
    <Box component={'section'} p={4}>
      <Grid container >
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
                         <Button variant="contained" sx={{ width: '49%', borderRadius: '16px'}}>{'ارسال پیام'}</Button>
                         <Button
                             variant="contained"
                             sx={{ width: '49%', backgroundColor: '#113A5F', color: '#66B1E2', borderRadius: '16px'}}
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
                          <Grid item container flexDirection={'column'} alignItems={'center'} my={2} xs={4} sx={{ cursor: 'pointer'}}>
                              <Box
                                  width={'40px'}
                                  height={'40px'}
                                  component={'img'}
                                  src={items.pic}
                              />
                              <Typography fontSize={'11px'} fontWeight={500}>{items.text}</Typography>
                          </Grid>
                          ))
                      }
                  </Grid>

              </Grid>
          </Grid>
      </Grid>
    </Box>
  )
}

export default HomeTile