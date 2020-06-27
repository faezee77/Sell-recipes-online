import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
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

import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const theme = createMuiTheme({
  direction: 'rtl'
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
      borderColor: 'green'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {

      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },

  },
})(TextField);


const useStyles = makeStyles((theme) => ({


  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },


  green: {
    color: '#fff',
    backgroundColor: "#3AAFA9",
    '&:hover': {
      backgroundColor: '#3AAFA9',
    },
  },

}));
const GreenCheckbox = withStyles({
  root: {
    color: '#3AAFA9'
  },

})((props) => <Checkbox color="default" {...props} />);

export default function SignIn() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;


  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (

    <div >

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div dir="rtl">
        <Grid justify="center"
          container component="main">


          <Grid textAlign="right" item xs={1} sm={1} md={4} component={Paper} elevation={6} >
            <div className={classes.paper}>

              <Typography component="h1" variant="h5" styly={{ backgroundColor: "#009688" }}>
                ورود به حساب کاربری
          </Typography>
              <form className={classes.form} autoComplete="off">

                <CssTextField
                  variant="outlined"
                  id="custom-css-outlined-input password"
                  margin="normal"
                  required
                  inputProps={{ style: { textAlign: 'right' } }}
                  InputLabelProps={{ style: { textAlign: 'right' } }}
                  fullWidth
                  label="نام کاربری"
                />
                <CssTextField
                  variant="outlined"
                  id="custom-css-outlined-input password"
                  margin="normal"
                  required
                  fullWidth
                  label="رمز عبور"
                  type="password"
                // helperText="لطفا این مورد را تکمیل کنید."
                // error
                />

                <br></br>
                <Grid
                  style={{ textAlign: "right", justify: "right" }}

                >
                  <FormControlLabel
                    control={<GreenCheckbox value="remember" />}
                    label="مرا به خاطر بسپار"
                    fullWidth
                  />
                  <br></br>
                </Grid>
                <br></br>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={ classes.green}
                  size="large"
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

                <br></br>
                <br></br>

                <Grid marginTop={"80"} justify="flex-start"
                  container direction="column" alignItems="flex-start">
                  <Grid item xs >
                    <Link href="#" variant="body1" color="#65ccb8" >
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

    </div >
  );
}


