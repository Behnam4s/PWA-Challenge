import React, {useEffect, useState} from 'react'
import {Box, Button, FilledInput, Grid, Input, Stack, TextField, Typography} from "@mui/material";
import { useForm } from 'react-hook-form';
import { verificationSchema, verificationResolver } from '../../schema/verification';
import {useRecoilState, useRecoilValue} from "recoil";
import userDataState from "../../store/userData";
import {useNavigate} from "react-router-dom";
import {RateReview} from "@mui/icons-material";

function Verification() {
  const userData = useRecoilValue(userDataState);
  const mobileNumber = userData?.mobileNumber;
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: verificationResolver,
  });
  const firstNum = watch('firstNumber');
  const secondNum = watch('secondNumber');
  const thirdNum = watch('thirdNumber');
  const fourthNum = watch('fourthNumber');
    const [counter, setCounter] = React.useState(59);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    const resend = () => {
        setCounter((t) => !t);
    };
    const editNumber = () =>{
        navigate('../login')
    }
  const onSubmit = (data) =>{
      console.log(data)
  }
  return (
      <Box component={'section'} sx={{ height: '100%'}}>
        <Grid container justifyContent={'center'} alignItems={'center'} sx={{height: '100%'}}>
          <Grid item xs={12} container flexDirection={'column'} alignItems={'center'}>
              <Stack alignItems={'center'} spacing={2} mb={2}>
                  <Typography variant={'h6'} color={'#60666B'} fontSize={'16px'} fontWeight={400}>
                      {'کد چهار رقمی پیامک شده به شماره زیر را وارد کنید.'}
                  </Typography>
                  <Button
                      variant="contained"
                      endIcon={<RateReview sx={{ marginRight: '10px'}} />}
                      onClick={editNumber}
                      sx={{
                          padding: '10px 15px',
                          borderRadius: '16px',
                          width: '50%',
                      }}
                  >
                      {mobileNumber}
                  </Button>
              </Stack>
            <Box
                component={'form'}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                autoComplete={'off'}
                mt={2}
            >
              <Grid container>
                  <Stack direction={'row'} spacing={2} justifyContent={'center'}>
                      <TextField
                          name={'firstNumber'}
                          type={'number'}
                          error={errors}
                          {...register("firstNumber")}
                          helperText={errors?.mobileNumber?.message}
                          sx={{
                              borderRadius: '25px 25px 0 0', backgroundColor: '#E5E6E6', width:'5%', color: '#FFF', dir: 'rtl',
                              marginLeft: '18px',
                              "& .MuiOutlinedInput-notchedOutline": {
                                  border: 'none',
                              },
                          }}
                      />
                      <TextField
                          // id="mobileNumber"
                          name={'secondNumber'}
                          type={'number'}
                          error={errors}
                          {...register("secondNumber")}
                          helperText={errors?.mobileNumber?.message}
                          sx={{
                              borderRadius: '25px 25px 0 0', backgroundColor: '#E5E6E6', width:'5%', color: '#FFF', dir: 'rtl',
                              "& .MuiOutlinedInput-notchedOutline": {
                                  border: 'none',
                              },
                          }}
                      />
                      <TextField
                          // id="mobileNumber"
                          name={'thirdNumber'}
                          type={'number'}
                          error={errors}
                          {...register("thirdNumber")}
                          helperText={errors?.mobileNumber?.message}
                          sx={{
                              borderRadius: '25px 25px 0 0', backgroundColor: '#E5E6E6', width:'5%', color: '#FFF', dir: 'rtl',
                              "& .MuiOutlinedInput-notchedOutline": {
                                  border: 'none',
                              },
                          }}
                      />
                      <TextField
                          // id="mobileNumber"
                          name={'fourthNumber'}
                          type={'number'}
                          error={errors}
                          {...register("fourthNumber")}
                          helperText={errors?.mobileNumber?.message}
                          sx={{
                              borderRadius: '25px 25px 0 0', backgroundColor: '#E5E6E6', width:'5%', color: '#FFF',
                              "& .MuiOutlinedInput-notchedOutline": {
                                  border: 'none',
                              },
                          }}
                      />
                  </Stack>
              </Grid>
            </Box>
              <Stack mt={4}>
                  <Typography variant={'p'} fontSize={'14px'} fontWeight={500} color={'#94989C'}>
                      {'پیامکی دریافت نکردید؟'}
                  </Typography>
                   {counter === 0 ?
									(
										<Typography
                                            variant={'h6'}
                                            fontSize={'14px'}
                                            fontWeight={500}
                                            textAlign={'center'}

                                            sx={{
                                                cursor: 'pointer',
                                        }}
                                            onClick={resend}
                                            color={'info.main'}
                                        >
											{'ارسال مجدد کد'}
										</Typography>
									)
									: (
                                        <Typography
                                            fontSize={'14px'}
                                            fontWeight={500}
                                            color={'#94989C'}
                                            textAlign={'center'}
                                        >
                                            {`${counter} تا ارسال مجدد`}
                                        </Typography>
                                        )
								}
              </Stack>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Verification