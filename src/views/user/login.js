import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import logo from "../../../public/images/food.jpg"


import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {primaryColor} from "../../constants/defaultsValues";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CssTextField = withStyles({
  root: {
      '& label.Mui-focused': {
          color: '#65ccb8',
          borderColor: '#65ccb8'
      },
      '& .MuiInput-underline:after': {
          borderBottomColor: '#65ccb8',
      },
      '& .MuiOutlinedInput-root': {

          '&.Mui-focused fieldset': {
              borderColor: '#65ccb8',
          },
      },

  },
})(TextField);


const useStyles = makeStyles((theme) => ({
root:{
  paddingTop:'70px'
},

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
    backgroundColor: primaryColor,
    '&:hover': {
      backgroundColor: primaryColor,
    },

  },
}));
const GreenCheckbox = withStyles({
  root: {
    color: '#65ccb8'
  },

})((props) => <Checkbox color="default" {...props} />);

export default function SignIn() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
    const [username,setusername]=useState()
    const [password,setpassword]=useState()
    const [errorusername,seterrorusername]=useState()
    const [errorpassword,seterropassword]=useState()
    const [validusername,setvalidusername] = useState(false)
    const [validpassword,setvalidpassword] = useState(false)


    const handleChange = (event,field)=>{
        console.log(field)
        if (field ==='password'){
            setpassword(event.target.value)
            setvalidpassword(false)
        }else if(field ==='username'){
            setusername(event.target.value)
            setvalidusername(false)
        }
        console.log(password,username)
    }

    const handleValidation = () =>{

        //username
        if(!username){
            setvalidusername(true)
            seterrorusername('نام کاربری نمیتواند خالی باشد')
        }
        //Email
        if(!password){
            setvalidpassword(true)
            seterropassword('رمز عبور نمیتواند خالی باشد')
        }
        console.log(password,typeof password)
        if(typeof password!== "undefined"){

            if (password.length < 8) {
                setvalidpassword(true)
                seterropassword('رمزعبور باید حداقل 8 کاراکتر باشد')
        }
        else if (/([A-Z]+)/g.test(password)) {
                setvalidpassword(true)
                seterropassword('رمز باید شامل حروف بزرگ باشد')
        }
            }
    }

  const { vertical, horizontal, open } = state;


  const handleClose = () => {
    setState({ ...state, open: false });
  };


  return (

    <div >


      <div >
        <Grid justify="center" className={classes.root}
          container component="main">
            <Grid item md={3} alignItems="center">
                <img width='100%' height='100%' src={logo}/>
            </Grid>

          <Grid textAlign="right" item xs={1} sm={1} md={4} component={Paper} elevation={6} >
            <div className={classes.paper}>

              <Typography component="h1" variant="h5" styly={{ backgroundColor: "#009688" }}>
                ورود به حساب کاربری
          </Typography>
              <form className={classes.form} autoComplete="off">

                <CssTextField
                    error={validusername}
                  variant="outlined"
                  id="custom-css-outlined-input password"
                  margin="normal"
                  required
                  inputProps={{ style: { textAlign: 'right' } }}
                  InputLabelProps={{ style: { textAlign: 'right' } }}
                  fullWidth
                  label="نام کاربری"
                    helperText={validusername? errorusername:''}
                    onChange={(event)=>handleChange(event,'username')}
                />
                <CssTextField
                    error={validpassword}
                  variant="outlined"
                  id="custom-css-outlined-input password"
                  margin="normal"
                  required
                  fullWidth
                  label="رمز عبور"
                  type="password"
                    helperText={validpassword? errorpassword:''}
                    onChange={(event)=>handleChange(event,'password')}
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
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={ classes.green}
                  size="large"
                  onClick={handleValidation}
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
                    <Link href="#" variant="body1" >
                      <p  >
                        رمز خود را فراموش کرده اید؟
                      </p>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body1" >
                      ایجاد حساب آشپز
                    </Link >
                      /
                      <Link href="#" variant="body1" >
                          ایجاد حساب کاربر
                      </Link >
                  </Grid>

                </Grid>

              </form>
            </div>
          </Grid>

        </Grid>
      </div>

    </div >
  );
}


