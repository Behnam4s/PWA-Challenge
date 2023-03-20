import React, {useState} from 'react'
import {Box, Button, FilledInput, Grid, Input, Stack, TextField, Typography} from "@mui/material";
import { useForm } from 'react-hook-form';
import { loginSchema, loginResolver } from '../../schema/login';
import Logo from '../../../../assets/images/logo.png';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import {useRecoilState} from "recoil";
import userDataState from "../../store/userData";
import {useNavigate} from "react-router-dom";

function Login() {
    const [userData, setUserData] = useRecoilState(userDataState);
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: loginResolver,
    });
    console.log(userData)
    const onSubmit = (data) =>{
        setUserData(data);
        navigate('../verification')

        // console.log(data);
    }
  return (
    <Box component={'section'} sx={{ height: '100%'}}>
      <Grid container justifyContent={'center'} alignItems={'center'} sx={{height: '100%'}}>
        <Grid item xs={12} container flexDirection={'column'} alignItems={'center'}>
          <Stack spacing={1} sx={{ width: '343px'}}>
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
                sx={{width:'60%'}}
                mt={2}
            >
               <Stack spacing={2} alignItems={'center'}>
                   <TextField
                       // id="mobileNumber"
                       name={'mobileNumber'}
                       type={'number'}
                       placeholder="شماره همراه"
                       control={control}
                       schema={loginSchema}
                       error={errors}
                       {...register("mobileNumber")}
                       helperText={errors?.mobileNumber?.message}
                       sx={{
                           borderRadius: '16px', backgroundColor: '#E5E6E6', width:'38%', color: '#FFF', dir: 'rtl',
                           "& .MuiOutlinedInput-notchedOutline": {
                               border: 'none',
                           },
                       }}
                   />
                   <TextField
                       // id="nationalCode"
                       type={'number'}
                       name={'nationalCode'}
                       placeholder="کد ملی"
                       {...register("nationalCode")}
                       control={control}
                       schema={loginSchema}
                       error={errors}
                       helperText={errors?.nationalCode?.message}
                       sx={{
                           borderRadius: '16px', backgroundColor: '#E5E6E6', width:'38%',
                           "& .MuiOutlinedInput-notchedOutline": {
                               label: 'red',
                               border: 'none',
                           },
                       }}
                   />
                   <Button
                       variant={'contained'}
                       type={'submit'}
                       sx={{
                           width:'38%',
                           borderRadius: '16px',
                           padding: '12px 16px',
                           backgroundColor: '#E5E6E6',
                           color: '#94989C',
                           fontWeight: 700,
                   }}
                   >
                       {'دریافت کد ورود'}
                   </Button>
               </Stack>
            </Box>
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    <input {...register("firstName")} />*/}
            {/*    <p>{errors.firstName?.message}</p>*/}

            {/*    <input {...register("age")} />*/}
            {/*    <p>{errors.age?.message}</p>*/}

            {/*    <input type="submit" />*/}
            {/*</form>*/}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login