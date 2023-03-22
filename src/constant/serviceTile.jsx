import React from 'react'
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import Car from '../assets/images/car.png';
import ArtBoard from '../assets/images/Artboard.png';
import Boxes from '../assets/images/box.png';
import Calendar from '../assets/images/calander.png';
import Check from '../assets/images/check.png';
import CreditCard from '../assets/images/creditCard.png';
import Department from '../assets/images/department.png';
import Flight from '../assets/images/flight.png';
import Doctor from '../assets/images/doctor.png';
import Insure from '../assets/images/insure.png';
import Receipt from '../assets/images/reciep.png';
import Transfer from '../assets/images/transfer.png';
function ServiceTile() {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const serviceList= [

      {
          pic: ArtBoard,
          text: 'صندوق امانات',
      },
      {
          pic: Flight,
          // text: 'لانژ اختصاصی فرودگاه',
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
          text: 'نرخ و شرایط سپرده',
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
      <Grid container>
        {
          serviceList?.map( items=> (
              <Grid item container flexDirection={'column'} alignItems={'center'} my={2}  xs={isTablet? 4 : 3} sx={{ cursor: 'pointer'}}>
                <Box
                    width={ isTablet?'40px': '50px'}
                    height={isTablet?'40px': '50px'}
                    component={'img'}
                    src={items.pic}
                />
                <Typography fontSize={isTablet?'10px': '12px'} fontWeight={500}>{items.text}</Typography>
              </Grid>
          ))
        }
      </Grid>
  )
}

export default ServiceTile