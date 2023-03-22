import React, {useState} from 'react'
import {Box, Button, FilledInput, Grid, Input, Stack, TextField, Typography} from "@mui/material";
import { useForm } from 'react-hook-form';
import { loginSchema, loginResolver } from '../../schema/login';
import Logo from '../../../../assets/images/logo.png';
import {useRecoilState} from "recoil";
import userDataState from "../../store/userData";
import {useNavigate} from "react-router-dom";

function Login() {
    const [userData, setUserData] = useRecoilState(userDataState);
    const navigate = useNavigate();
    const inputStyle =
        {
            borderRadius: '16px', backgroundColor: '#E5E6E6', color: '#FFF',
            "& .MuiOutlinedInput-notchedOutline": {
                border: 'none',
            },
        }
    const {
        handleSubmit,
        register,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: loginResolver,
        defaultValues:{
            nationalCode: userData.nationalCode,
            mobileNumber: userData.mobileNumber,
        },
    });
    console.log(userData)
    const onSubmit = (data) =>{
        setUserData(data);
        navigate('../verification')
    }
  return (
    <Box component={'section'} sx={{ height: '100%'}}>
      <Grid container justifyContent={'center'} alignItems={'center'} sx={{height: '100%'}}>
        <Grid item xs={12} container flexDirection={'column'} alignItems={'center'} px={1}>
          <Stack spacing={1} sx={{ width: {lg:'30%', xs: '100%'}}}>
             <Grid container justifyContent={'center'}>
                 <img src={Logo} alt={'addUserIcon'} width= {'108px'} height= {'108px'} />
             </Grid>
            <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '18px',
                }}
            >{'ورود'}</Typography>
            <Typography
                variant={'h6'}
                color={'#60666B'}
                sx={{ fontSize: '16px', fontWeight: 400, textAlign: 'right', lineHeight: '24px'}}
            >
              {'مشتری ویژه عزیز، با وارد نمودن شماره موبایل (ثبت شده در بانک سامان) و کد ملی خود می‌توانید با بانکدار خود ارتباط برقرار کنید.'}
            </Typography>
          </Stack>
            <Box
                component={'form'}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                autoComplete={'off'}
                sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}
                mt={2}
            >
               <Stack spacing={2} sx={{ width:{ xs: '100%', lg: '30%'}}} alignItems={'center'}>
                   <TextField
                       name={'mobileNumber'}
                       type={'number'}
                       placeholder="شماره همراه"
                       control={control}
                       schema={loginSchema}
                       fullWidth
                       error={errors?.mobileNumber}
                       {...register("mobileNumber")}
                       helperText={errors?.mobileNumber?.message}
                       sx={inputStyle}
                   />
                   <TextField
                       type={'number'}
                       name={'nationalCode'}
                       placeholder="کد ملی"
                       {...register("nationalCode")}
                       control={control}
                       schema={loginSchema}
                       fullWidth
                       error={errors?.nationalCode}
                       helperText={errors?.nationalCode?.message}
                       sx={inputStyle}
                   />
                   <Button
                       variant={'contained'}
                       type={'submit'}
                       fullWidth
                       sx={{

                           borderRadius: '16px',
                           padding: '12px 16px',
                           fontWeight: 700,
                   }}
                   >
                       {'دریافت کد ورود'}
                   </Button>
               </Stack>
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login