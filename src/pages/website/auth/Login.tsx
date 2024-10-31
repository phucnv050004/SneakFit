import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TUser } from "src/interfaces/TUser";
import { LoginSchema } from "@/validate/auth";
import { BoxAuthForm, DescLeft, DescRight, TextNameShop } from "./styled";

const Login = () => {
  const nav = useNavigate();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">("success");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<TUser> = async (data) => {
    try {
      const result = await axios.post("/auth/login", data);
      setAlertMessage("Đăng Nhập thành công!");
      setAlertSeverity("success");
      localStorage.setItem("user", JSON.stringify(result.data));
      setTimeout(() => {
        nav("/admin");
      }, 1000);
    } catch (error) {
      const AxiosErrors = error as AxiosError;
      const errorMessage =
        typeof AxiosErrors?.response?.data === "string"
          ? AxiosErrors.response.data
          : "Đăng Nhập thất bại!";
      setAlertMessage(errorMessage);
      setAlertSeverity("error");
    }
  };

  return (
    <Stack alignItems="center" mb={10} mt={5}>
      {alertMessage && (
        <Alert
          sx={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 1000,
          }}
          severity={alertSeverity}
          onClose={() => setAlertMessage(null)}
        >
          {alertMessage}
        </Alert>
      )}

      <img
        src="https://theme.hstatic.net/200000306687/1000886682/14/slideShow_f1_3.png?v=153"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <BoxAuthForm
        sx={{
          maxWidth: "lg",
          width: "100%",
          padding: { xs: 2, md: 5 },
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <DescLeft
            width={{ xs: "100%", md: "40%" }}
            sx={{
              marginLeft: { md: "190px" },
              marginTop: "30px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <TextNameShop
              variant="h3"
              sx={{
                fontSize: { xs: "40px", md: "60px" },
                fontWeight: "bold",
                lineHeight: "1.5",
                fontFamily: "montserrat",
              }}
            >
             SneakFit
            </TextNameShop>
            <Typography
              sx={{
                lineHeight: "1.9",
                fontFamily: "montserrat",
                paddingX: { xs: 2, md: 0 },
              }}
            >
             TRẢI NGHIỆM CON ĐƯỜNG MÀU SẮC ĐẦY HOA DÀI VÔ TẬN CỦA SNEAKFIT
            </Typography>
          </DescLeft>

          <DescRight width={{ xs: "100%", md: "50%" }}>
            <Typography
              variant="h3"
              mb={3}
              textAlign="center"
              sx={{
                fontWeight: "bold",
                fontFamily: "montserrat",
              }}
            >
              Đăng nhập
            </Typography>
            <Stack width={{ xs: "100%", md: "60%" }} sx={{ margin: "auto" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={2}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    {...register("email", { required: true })}
                    autoComplete="email"
                    autoFocus
                    sx={{
                      backgroundColor: "rgb(215, 218, 211)",
                    }}
                  />
                  {errors.email && (
                    <Typography color="red">{errors.email.message}</Typography>
                  )}

                  <TextField
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    {...register("password", { required: true })}
                    autoComplete="current-password"
                    sx={{
                      backgroundColor: "rgb(215, 218, 211)",
                    }}
                  />
                  {errors.password && (
                    <Typography color="red">{errors.password.message}</Typography>
                  )}

                  <Button type="submit" variant="contained" fullWidth>
                    Đăng Nhập
                  </Button>
                </Stack>
                <Stack mt={2} alignItems="center">
                  <Typography sx={{ fontSize: "10px" }}>-- hoặc --</Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "green", mt: 2 }}
                    component={Link}
                    to="/register"
                  >
                    Đăng Kí
                  </Button>
                </Stack>
              </form>
            </Stack>
          </DescRight>
        </Stack>
      </BoxAuthForm>
    </Stack>
  );
};

export default Login;
