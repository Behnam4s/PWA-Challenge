import React, {useEffect, useState} from 'react'
import {
    Box,
    Button,
    CircularProgress,
    FilledInput,
    Grid,
    Input,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from "@mui/material";
import { useForm } from 'react-hook-form';
import { verificationSchema, verificationResolver } from '../../schema/verification';
import {useRecoilState, useRecoilValue} from "recoil";
import userDataState from "../../store/userData";
import {useNavigate} from "react-router-dom";
import {RateReview} from "@mui/icons-material";
import HomeTile from '../../../customer/pages/panel/homeTile'

function Verification() {
  const userData = useRecoilValue(userDataState);
  const mobileNumber = userData?.mobileNumber;
  const [counter, setCounter] = useState(59);
  const [verifyCodeLoading, setVerifyCodeLoading] = useState(false);
    const isTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    reset,
    watch,
    formState: { errors, isDirty, dirtyFields, isValid },
  } = useForm({
    resolver: verificationResolver,
    mode: 'all',
      defaultValues:{
        firstNumber: null,
      },
  });
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, []);

    const resend = () => {
        setCounter((t) => !t);
    };
    const editNumber = () =>{
        navigate('../login')
    }
    useEffect(()=>{
        if (isValid){
            onSubmit();
        }
    },[isValid])

    const verificationButton = {
        borderRadius: '25px 25px 0 0',
        backgroundColor: '#E5E6E6',
        height: !isTablet ? '70px' : '50px',
        color: '#FFF',
        marginLeft: '18px',
        "& .MuiOutlinedInput-notchedOutline": {
            border: 'none',
        },
    }

    // fake verification API Call
  const onSubmit = () =>{
        setVerifyCodeLoading(true);
      setTimeout(()=>{
          setVerifyCodeLoading(false)
          navigate('homeTile')
      },2000)
  }
  return (
      <Box component={'section'} sx={{ height: '100%'}}>
        {/* <Grid container justifyContent={'center'} alignItems={'center'} sx={{height: '100%'}}>
          <Grid item xs={12} container flexDirection={'column'} alignItems={'center'}>
              <Stack alignItems={'center'} spacing={2} mb={2} sx={{ width: isTablet? '90%':'50%'}}>
                  <Typography variant={'h6'} color={'#60666B'} fontSize={isTablet? '14px':'18px'} fontWeight={400}>
                      {'کد چهار رقمی پیامک شده به شماره زیر را وارد کنید.'}
                  </Typography>
                  <Button
                      variant="contained"
                      endIcon={<RateReview sx={{ marginRight: '10px'}} />}
                      onClick={editNumber}
                      sx={{
                          padding: '10px 15px',
                          borderRadius: '16px',
                          width: isTablet ?  '70%':'50%',
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
                display={'flex'}
                justifyContent={'center'}
                mt={2}
            >
              <Grid container justifyContent={'center'} sx={{width: isTablet? '90%':'50%'}}>
                  {
                      verifyCodeLoading?
                          <Box sx={{ display: 'flex' }}>
                              <CircularProgress />
                          </Box>
                          :
                          <Stack direction={'row'} spacing={2} justifyContent={'center'} >
                              <TextField
                                  name={'firstNumber'}
                                  type={'tel'}
                                  error={errors}

                                  inputProps={{ maxlength:1, style: { textAlign: 'center' }}}
                                  {...register("firstNumber")}
                                  helperText={errors?.mobileNumber?.message}
                                  sx={verificationButton}
                              />
                              <TextField
                                  // id="mobileNumber"
                                  name={'secondNumber'}
                                  type={'tell'}
                                  error={errors}
                                  inputProps={{ maxlength:1, style: { textAlign: 'center' }}}
                                  {...register("secondNumber")}
                                  helperText={errors?.mobileNumber?.message}
                                  sx={verificationButton}
                              />
                              <TextField
                                  // id="mobileNumber"
                                  name={'thirdNumber'}
                                  type={'tell'}
                                  error={errors}
                                  inputProps={{ maxlength:1, style: { textAlign: 'center' }}}
                                  {...register("thirdNumber")}
                                  helperText={errors?.mobileNumber?.message}
                                  sx={verificationButton}
                              />
                              <TextField
                                  // id="mobileNumber"
                                  name={'fourthNumber'}
                                  type={'tell'}
                                  error={errors}
                                  inputProps={{ maxlength:1, style: { textAlign: 'center' }}}
                                  {...register("fourthNumber")}
                                  helperText={errors?.mobileNumber?.message}
                                  sx={verificationButton}
                              />
                          </Stack>
                  }
              </Grid>
            </Box>
              <Stack mt={4}>
                  <Typography variant={'p'} fontSize={isTablet? '13px':'18px'} fontWeight={500} color={'#94989C'}>
                      {'پیامکی دریافت نکردید؟'}
                  </Typography>
                   {counter === 0 ?
									(
										<Typography
                                            variant={'h6'}
                                            fontSize={isTablet? '13px':'18px'}
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
                                            fontSize={isTablet? '13px':'18px'}
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
        </Grid> */}
        <Grid container flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  sx={{width: '100%', height: '100%'}}>
            <Grid item xs={4} container justifyContent={'center'} alignItems={'center'} sx={{backgroundColor: 'blue'}}>
                <Stack alignItems={'center'} spacing={2} mb={2} >
                    <Typography variant={'h6'} color={'#60666B'} fontSize={isTablet? '14px':'24px'} fontWeight={400}>
                        {'کد چهار رقمی پیامک شده به شماره زیر را وارد کنید.'}
                    </Typography>
                    <Button
                        variant="contained"
                        endIcon={<RateReview sx={{ marginRight: '10px'}} />}
                        onClick={editNumber}
                        sx={{
                            padding: '10px 15px',
                            borderRadius: '16px',
                            width: isTablet ?  '70%':'50%',
                        }}
                    >
                        {mobileNumber}
                    </Button>
                </Stack>
            </Grid>
            <Grid item xs={4} container justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'green'}}>
                <Box
                    component={'form'}
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete={'off'}
                    display={'flex'}
                    justifyContent={'center'}
                    mt={2}
                >
                        {
                            verifyCodeLoading?
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                                :
                                <Stack direction={'row'} spacing={2} justifyContent={'center'} >
                                    <TextField
                                        name={'firstNumber'}
                                        type={'tel'}
                                        error={errors}

                                        inputProps={{ maxlength:1, style: { textAlign: 'center' }}}
                                        {...register("firstNumber")}
                                        helperText={errors?.mobileNumber?.message}
                                        sx={verificationButton}
                                    />
                                    <TextField
                                        // id="mobileNumber"
                                        name={'secondNumber'}
                                        type={'tell'}
                                        error={errors}
                                        inputProps={{ maxlength:1, style: { textAlign: 'center' }}}
                                        {...register("secondNumber")}
                                        helperText={errors?.mobileNumber?.message}
                                        sx={verificationButton}
                                    />
                                    <TextField
                                        // id="mobileNumber"
                                        name={'thirdNumber'}
                                        type={'tell'}
                                        error={errors}
                                        inputProps={{ maxlength:1, style: { textAlign: 'center' }}}
                                        {...register("thirdNumber")}
                                        helperText={errors?.mobileNumber?.message}
                                        sx={verificationButton}
                                    />
                                    <TextField
                                        // id="mobileNumber"
                                        name={'fourthNumber'}
                                        type={'tell'}
                                        error={errors}
                                        inputProps={{ maxlength:1, style: { textAlign: 'center' }}}
                                        {...register("fourthNumber")}
                                        helperText={errors?.mobileNumber?.message}
                                        sx={verificationButton}
                                    />
                                </Stack>
                        }
                </Box>
            </Grid>
        </Grid>
      </Box>
  )
}

export default Verification