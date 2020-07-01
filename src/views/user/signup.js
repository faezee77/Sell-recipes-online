import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from "../../image/food.jpg"
import RTL from '../../RTL'

import { withStyles } from '@material-ui/core/styles';
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
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },

    green: {
        color: '#fff',
        backgroundColor: "#65ccb8",
    },

}));
const GreenCheckbox = withStyles({
    root: {
        color: '#65ccb8',
        '&$checked': {
            color: '#65ccb8',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);



export default function SignUp() {
    const classes = useStyles();

    return (
        <div >

            <Grid container
                direction="row"
                justify="center"
                component="main" >


                <Grid item md={4} component={Paper} elevation={6}
                >
                    <div className={classes.paper} width='50%'>
                        <Typography component="h1" variant="h5">
                            ساخت حساب کاربری
          </Typography>
                        <form className={classes.form} noValidate>

                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                required
                                fullWidth
                                margin="normal"
                                id="name"
                                label="نام و نام خانوادگی"
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />


                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="نام کاربری"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="phone number"
                                label="شماره همراه"
                                id="phone number"
                            />


                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="رمز عبور"
                                type="password"

                            />

                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="تکرار رمز عبور"
                                type="password"


                            />
                            <br></br>
                            <Grid style={{ textAlign: "right", justify: "right" }}>

                                <FormControlLabel
                                    control={<GreenCheckbox name="checkedG" />}
                                    label="آشپز"

                                />

                                <FormControlLabel
                                    control={<GreenCheckbox name="checkedG" />}
                                    label="کاربر عادی"
                                />
                            </Grid>
                            <br></br>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit, classes.green}
                            >
                                <Typography variant="h6">
                                    ایجاد حساب
          </Typography>
                            </Button>


                        </form>
                        <Link href="#" variant="body1" color="#65ccb8" alignItems="flex" >
                            <p  >
                                ورود به حساب کاربری
                      </p>
                        </Link>
                    </div>
                </Grid>
                <Grid component={Paper} elevation={6} square item md={3} >
                    <img width='100%' height='100%' src={logo}></img>
                </Grid>

            </Grid>
        </div>

    );
}