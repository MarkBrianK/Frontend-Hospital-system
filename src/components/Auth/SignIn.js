import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const SignIn = ({ setUser }) => {
  // const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('')
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const SignIn = ({ setUser }) => {
  //   // const [password, setPassword] = useState('')
  //   // const [email, setEmail] = useState('')
  //   const [errors, setErrors] = useState([]);
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   // const navigate = useNavigate();
  const onFormInputChanged = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   const onFormSubmit = (e) => {
  //     e.preventDefault();
  //     // alert("login success");
  //     // console.log(formData);

  //     // post user credentialas to login route

  //     fetch("/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     }).then((res) => {
  //       if (res.ok) {
  //         res.json().then((user) => {
  //           setUser(user);
  //           console.log(user);
  //           alert(errors);
  //         });
  //       } else {
  //         res.json().then((error) => setErrors(error.errors));
  //       }
  //     });
  //   };

  //   return (
  //     <div className="container text-center">
  //       <div className="row gx-4">
  //         <div className="col border">hello</div>
  //         <form className="col border">
  //           <h1>SignIn</h1>
  //           <input
  //             name="email"
  //             type="email"
  //             className="form-control my-2"
  //             placeholder="type in your email address"
  //             onChange={onFormInputChanged}
  //           ></input>
  //           <input
  //             name="password"
  //             type="password"
  //             className="form-control my-2"
  //             placeholder="PLease enter your password"
  //             onChange={onFormInputChanged}
  //           ></input>
  //           <button
  //             className="btn btn-primary"
  //             type="submit"
  //             onClick={onFormSubmit}
  //           >
  //             Submithttp://localhost:3000
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // post user credentialas to login route

    fetch("/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          navigate("/home");
          console.log(user);
          sessionStorage.setItem("user", JSON.stringify(user));
          console.log(user);
          // alert(errors);
        });
      } else {
        res.json().then((error) => setErrors(error.errors));
      }
    });
  };

  //   return (
  //     <div className="container text-center">
  //       <div className="row gx-4">
  //         <div className="col border">hello</div>
  //         <form className="col border">
  //           <h1>SignIn</h1>
  //           <input
  //             name="email"
  //             type="email"
  //             className="form-control my-2"
  //             placeholder="type in your email address"
  //             onChange={onFormInputChanged}
  //           ></input>
  //           <input
  //             name="password"
  //             type="password"
  //             className="form-control my-2"
  //             placeholder="PLease enter your password"
  //             onChange={onFormInputChanged}
  //           ></input>
  //           <button
  //             className="btn btn-primary"
  //             type="submit"
  //             onClick={onFormSubmit}
  //           >
  //             Submit
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };

  // export default SignIn;

  //==================================MUI Starts here ===================================

  // import * as React from 'react';
  // import Avatar from '@mui/material/Avatar';
  // import Button from '@mui/material/Button';
  // import CssBaseline from '@mui/material/CssBaseline';
  // import TextField from '@mui/material/TextField';
  // import FormControlLabel from '@mui/material/FormControlLabel';
  // import Checkbox from '@mui/material/Checkbox';
  // import Link from '@mui/material/Link';
  // import Grid from '@mui/material/Grid';
  // import Box from '@mui/material/Box';
  // //import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
  // import Typography from '@mui/material/Typography';
  // import Container from '@mui/material/Container';
  // import { createTheme, ThemeProvider } from '@mui/material/styles';

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const theme = createTheme();

  // fetch("http://localhost:3000/users/signin", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(formData),
  // }).then((res) => {
  //   if (res.ok) {
  //     res.json().then((user) => {
  //       setUser(user);

  //       // console.log(user);
  //       // navigate("/home");

  //     });
  //   } else {
  //     res.json().then((error) => setErrors(error.errors));
  //   }

  // });
  // export default function SignIn() {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get('email'),
  //       password: data.get('password'),
  // >>>>>>> 5a35d30515cffeb44155cff81538ef081e85c8f8
  //     });

  return (
    <ThemeProvider theme={theme}>
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
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={onFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onFormInputChanged}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onFormInputChanged}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div>{errors}</div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onChange={onFormSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <NavLink to="/signup" variant="body2" className="pe-auto">
                  Don't have an account? Sign Up
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;

//==================================MUI Ends here =====================================
