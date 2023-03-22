import React, { useEffect, useState } from "react";
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
  useMediaQuery,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  verificationSchema,
  verificationResolver,
} from "../../schema/verification";
import { useRecoilState, useRecoilValue } from "recoil";
import userDataState from "../../store/userData";
import { useNavigate } from "react-router-dom";
import { RateReview } from "@mui/icons-material";

function Verification() {
  const userData = useRecoilValue(userDataState);
  const mobileNumber = userData?.mobileNumber;
  const [counter, setCounter] = useState(59);
  const [verifyCodeLoading, setVerifyCodeLoading] = useState(false);
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("lg"));
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
    mode: "all",
    defaultValues: {
      firstNumber: null,
    },
  });
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const resend = () => {
    setCounter(59);
  };
  const editNumber = () => {
    navigate("../login");
  };
  useEffect(() => {
    if (isValid) {
      onSubmit();
    }
  }, [isValid]);

  const verificationButton = {
    borderRadius: "25px 25px 0 0",
    backgroundColor: "#E5E6E6",
    width: "64px",
    height: !isTablet ? "70px" : "50px",
    color: "#FFF",
    marginLeft: "8px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  };

  // fake verification API Call
  const onSubmit = () => {
    setVerifyCodeLoading(true);
    setTimeout(() => {
      setVerifyCodeLoading(false);
      navigate('/panel/profile');
    }, 2000);
  };
  return (
    <Box component={"section"} sx={{ height: "100%" }}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100%" }}
      >
        <Grid
          item
          xs={12}
          container
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Stack alignItems={"center"} spacing={2} mb={2} sx={{ width: isTablet? '100%':'50%'}}>
            <Typography
              variant={"h6"}
              color={"#60666B"}
              fontSize={isTablet ? "14px" : "16px"}
              fontWeight={400}
              mb={1}
            >
              {"کد چهار رقمی پیامک شده به شماره زیر را وارد کنید."}
            </Typography>
            <Button
              variant="contained"
              endIcon={<RateReview sx={{ marginRight: "10px" }} />}
              onClick={editNumber}
              sx={{
                padding: "10px 15px",
                borderRadius: "16px",
              }}
            >
              {mobileNumber}
            </Button>
          </Stack>
          <Grid item xs={12} sm={6} md={6} container justifyContent={"center"}>
            <Box
              component={"form"}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              autoComplete={"off"}
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={'center'}
              mt={2}
            >
              {
                verifyCodeLoading ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <>
                    <TextField
                      name={"firstNumber"}
                      type={"tel"}
                      error={errors}
                      inputProps={{
                        maxlength: 1,
                        style: { textAlign: "center" },
                      }}
                      {...register("firstNumber")}
                      helperText={errors?.mobileNumber?.message}
                      sx={verificationButton}
                    />
                    <TextField
                      type={"tell"}
                      error={errors}
                      inputProps={{
                        maxlength: 1,
                        style: { textAlign: "center" },
                      }}
                      {...register("secondNumber")}
                      helperText={errors?.mobileNumber?.message}
                      sx={verificationButton}
                    />
                    <TextField
                      name={"thirdNumber"}
                      type={"tell"}
                      error={errors}
                      inputProps={{
                        maxlength: 1,
                        style: { textAlign: "center" },
                      }}
                      {...register("thirdNumber")}
                      helperText={errors?.mobileNumber?.message}
                      sx={verificationButton}
                    />
                    <TextField
                      name={"fourthNumber"}
                      type={"tell"}
                      error={errors}
                      inputProps={{
                        maxlength: 1,
                        style: { textAlign: "center" },
                      }}
                      {...register("fourthNumber")}
                      helperText={errors?.mobileNumber?.message}
                      sx={verificationButton}
                    />
                  </>
                )
              }
            </Box>
          </Grid>
          <Stack mt={4}>
            <Typography
              variant={"p"}
              fontSize={isTablet ? "13px" : "16px"}
              fontWeight={500}
              color={"#94989C"}
            >
              {"پیامکی دریافت نکردید؟"}
            </Typography>
            {counter === 0 ? (
              <Typography
                variant={"h6"}
                fontSize={isTablet ? "13px" : "16px"}
                fontWeight={500}
                textAlign={"center"}
                sx={{
                  cursor: "pointer",
                }}
                onClick={resend}
                color={"info.main"}
              >
                {"ارسال مجدد کد"}
              </Typography>
            ) : (
              <Typography
                fontSize={isTablet ? "13px" : "16px"}
                fontWeight={500}
                color={"#94989C"}
                textAlign={"center"}
              >
                {`${counter} تا ارسال مجدد`}
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Verification;
