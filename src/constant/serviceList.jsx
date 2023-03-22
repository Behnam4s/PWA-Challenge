import React from 'react'
import {Box, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
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
function ServiceList() {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const serviceStyle = {
        width: '100%',
        alignItems: 'center',
    }
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
  return (
      <Grid container>
        {
          serviceList?.map( items=> (
              <Grid item container  alignItems={'center'} justifyContent={'center'} my={2} xs={12} md={6} sx={{ cursor: 'pointer'}}>
                  <Stack direction={'row'} sx={isTablet && serviceStyle }>
                      <Box
                          width={ isTablet?'40px': '50px'}
                          height={isTablet?'40px': '50px'}
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
  )
}

export default ServiceList