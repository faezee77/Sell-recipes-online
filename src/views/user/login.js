import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import logo from "../../image/food.jpg"


import { withStyles } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// import Signup from "./Signup"
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: { logo },
    // backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },

  },
  green: {
    color: '#fff',
    backgroundColor: "#3AAFA9",
  },

}));
const GreenCheckbox = withStyles({
  root: {
    color: '#3AAFA9',
    '&$checked': {
      color: '#3aa2af',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function SignInSide() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (


    // <Card alignItems="center"
    // justify="center" className={classes.root}>
    // <CardContent>
    <ThemeProvider theme={theme}>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div dir="rtl">
        <Grid justify="center"
          container component="main">


          <Grid textAlign="right" item xs={1} sm={1} md={4} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              {/* <Avatar className={classes.avatar}> */}
              {/* <LockOutlinedIcon /> */}
              {/* </Avatar> */}
              <Typography component="h1" variant="h5" styly={{ backgroundColor: "#009688" }}>
                ورود به حساب کاربری
          </Typography>
              <form className={classes.form}  autoComplete="off">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  inputProps={{ style: { textAlign: 'right' } }}
                  InputLabelProps={{ style: { textAlign: 'right' } }}
                  fullWidth
                  id="username"
                  label="نام کاربری"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  defaultValue="سارا"

                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="رمز عبور"
                  type="password"
                  id="password"
                  // helperText="لطفا این مورد را تکمیل کنید."
                  // error

                />
                <br></br>
              <Grid 
                 style={{textAlign:"right", justify:"right"}}
              
              >
                <FormControlLabel
                  control={<GreenCheckbox value="remember" />}
                  label="مرا به خاطر بسپار"
                  fullWidth
                />
                <br></br>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit, classes.green}
                  size="large"
                  onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
                >
                  <Typography component="h6" variant="h5">
                    ورود
          </Typography>
                </Button>

      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity="error">                  <Typography component="h6" variant="h6">
                    رمز ورود معتبر نمیباشد.
          </Typography></Alert>
      </Snackbar>

  
                {/* <Fab variant="extended" color="primary" size="large" >
              
          Sign In
        </Fab> */}
                <br></br>
                <br></br>

                <Grid marginTop={"80"} justify="flex-start" 
                  container direction="column" alignItems="flex-start">
                  <Grid item xs >
                    <Link href="#" variant="body1"  color="#65ccb8" >
                      <p  >
                      رمز خود را فراموش کرده اید؟
                      </p>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body1" color="#65ccb8">
                    حساب کاربری ندارید؟ ایجاد حساب
                    </Link>
                  </Grid>

                </Grid>

              </form>
            </div>
          </Grid>
          <Grid item md={3} alignItems="center">
            <img width='100%' height='100%' src={logo}></img>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider >
    // </CardContent>
    // </Card>
  );
}


