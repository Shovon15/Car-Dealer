import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { LoadingButton } from "@mui/lab";
import { SaveAlt, Visibility, VisibilityOff } from "@mui/icons-material";
import { Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { AuthContext } from "../../Context/AuthProvider";
import { useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    console.log("isloading:", isloading);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState();
    console.log(loginError);
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // isLoading,
        formState: { errors },
    } = useForm();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (data) => {
        console.log(data);
        setLoginError("");
        setIsLoading(true);
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setIsLoading(false);
                // alert("User login Successfully.");
                // navigate(from, { replace: true });
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error.message);
                setLoginError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        // console.log(data);
        setLoginError(""); //for previous error reset
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                // saveUser(user.displayName, user.email, userRole, user.photoURL);
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
            });
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get("email"),
    //         password: data.get("password"),
    //     });
    // };

    // const [loading, setLoading] = React.useState(false);

    // React.useEffect(() => {
    //     const id = setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);

    //     return () => {
    //         clearTimeout(id);
    //     };
    // }, [loading]);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ color: "steelBlue", fontSize: "30px" }}>
                    Log In
                </Typography>

                <Box component="form" onSubmit={handleSubmit(handleLogin)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        {...register("email", {
                            required: "Email Address is required",
                        })}
                    />
                    {errors.email && <Typography color="primary.red">{errors.email.message}</Typography>}
                    <FormControl sx={{ width: "100%" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            required
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        //   onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                    message: "Password must have uppercase, number and special characters",
                                },
                            })}
                        />
                        {errors.password && <Typography color="primary.red">{errors.password.message}</Typography>}
                    </FormControl>
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    {/* <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Login
                    </Button> */}
                    {loginError && <Typography color="primary.red">{loginError}</Typography>}
                    <LoadingButton
                        type="submit"
                        loading={isloading}
                        loadingPosition="start"
                        startIcon={<SaveAlt />}
                        // variant="outlined"
                        // onClick={() => setIsloading(true)}
                        fullWidth
                        variant="contained"
                        color="error"
                        sx={{ mt: 3, mb: 2, backgroundColor: "primary.green" }}
                    >
                        LogIn
                    </LoadingButton>

                    <Grid container>
                        <Grid item display="flex" sx={{ gap: 1 }}>
                            <Typography>Don't have an account?</Typography>
                            <Link to="/signup" variant="body2">
                                SignUp
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 1 }}>OR</Divider>
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleGoogleSignIn}
                        sx={{
                            mt: 1,
                            mb: 2,
                            color: (t) =>
                                t.palette.mode === "light" ? t.palette.primary.black : t.palette.primary.white,
                        }}
                    >
                        Google Sign In
                    </Button>
                </Box>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
    );
};
export default Login;
