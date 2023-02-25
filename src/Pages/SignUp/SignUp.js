import { Copyright, SaveAlt } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
    Avatar,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    Paper,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    // const [loading, setLoading] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const [signUpError, setSignUpError] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    // -------------password Toggle------------
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    // ------------------for loading button----------------
    // useEffect(() => {
    //     const id = setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);

    //     return () => {
    //         clearTimeout(id);
    //     };
    // }, [loading]);
    const from = location.state?.from?.pathname || "/";
    const imageHostKey = process.env.REACT_APP_img_KEY;

    const handleSignUp = (data) => {
        setIsLoading(true);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                console.log(imgData);
                if (imgData.success) {
                    let image = imgData.data.url;
                    setSignUpError("");

                    createUser(data.email, data.password)
                        .then((result) => {
                            const user = result.user;
                            console.log(user);
                            setIsLoading(false);
                            // alert("User Created Successfully.");
                            const userInfo = {
                                displayName: data.name,
                                image: image,
                            };
                            updateUser(userInfo)
                                .then(() => {
                                    saveUser(data.name, data.email, image);
                                    setLoading(false);
                                    // navigate(from, { replace: true });
                                })
                                .catch((err) => console.log(err));
                        })
                        .catch((error) => {
                            console.log(error);
                            setLoading(false);
                            setSignUpError(error.message);
                        });
                }
            });
    };

    const handleGoogleSignIn = () => {
        setSignUpError(""); //for previous error reset
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                saveUser(user.displayName, user.email, user.photoURL);
            })
            .catch((error) => {
                console.log(error.message);
                setSignUpError(error.message);
            });
    };
    const saveUser = (name, email, image) => {
        const users = { name, email, image };

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(users),
        })
            .then((res) => res.json())
            .then((data) => {
                // navigate(from, { replace: true });
                console.log("userSaveDb", data);
                // getUserToken(email);
                // if (data.acknowledged) {
                //     setTreatment(null);
                //     toast.success("Booking confirmed");
                //     refetch();
                // } else {
                //     toast.error(data.message);
                // }
            });
    };

    return (
        <Container sx={{ my: 8, height: "auto" }}>
            <Grid container component="main" sx={{}}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: "url(https://i.ibb.co/r6P2xPP/car-signup-bg.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={4.5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 2,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>{/* <LockOutlinedIcon /> */}</Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>

                        <Box onSubmit={handleSubmit(handleSignUp)} component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                size="small"
                                {...register("name", {
                                    required: "name is required",
                                })}
                            />

                            {errors.name && <Typography color="primary.red">{errors.name?.message}</Typography>}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                size="small"
                                // autoFocus
                                {...register("email", {
                                    required: "Email Address is required",
                                })}
                            />
                            {errors.email && <Typography color="primary.red">{errors.email?.message}</Typography>}
                            <TextField
                                margin="normal"
                                type="file"
                                required
                                fullWidth
                                id="image"
                                size="small"
                                name="img"
                                // label="image"
                                // defaultValue="Default Value"
                                // placeholder="kjadkj"
                                // autoComplete="img"
                                // autoFocus
                                {...register("image", {
                                    required: "image is required",
                                })}
                            />
                            {errors.image && <Typography color="primary.red">{errors.image?.message}</Typography>}
                            <Box position="relative">
                                <TextField
                                    // sx={{ zIndex: "modal" }}
                                    // position="absolute"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={passwordShown ? "text" : "password"}
                                    // type="password"
                                    id="password"
                                    size="small"
                                    autoComplete="current-password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: {
                                            value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                            message: "Password must have uppercase, number and special characters",
                                        },
                                    })}
                                />
                                <Box position="absolute" sx={{ top: "43%", left: "90%", cursor: "pointer" }}>
                                    <span onClick={togglePassword}>
                                        {passwordShown === true ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </span>
                                </Box>
                            </Box>

                            {errors.password && <Typography color="primary.red">{errors.password.message}</Typography>}
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            {/* <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign Up
                            </Button> */}
                            {signUpError && <Typography color="primary.red">{signUpError}</Typography>}
                            <LoadingButton
                                type="submit"
                                loading={isloading}
                                loadingPosition="start"
                                startIcon={<SaveAlt />}
                                fullWidth
                                variant="contained"
                                color="error"
                                sx={{ mt: 3, mb: 2, backgroundColor: "primary.green" }}
                            >
                                SignUp
                            </LoadingButton>
                            <Grid container>
                                <Grid item display="flex" sx={{ gap: 1 }}>
                                    <Typography>Already have an account?</Typography>
                                    <Link to="/login" variant="body2">
                                        Login
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
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignUp;
