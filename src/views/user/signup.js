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
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from "../../image/food.jpg"
import RTL from '../../RTL'

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
// import FormGroup from '@material-ui/core/FormGroup';

// import {create} from 'jss';
// import {jssPreset, StylesProvider} from '@material-ui/core/styles';
// import rtl from 'jss-rtl';
// // Configure JSS
// const jss = create({plugins: [...jssPreset().plugins, rtl()]});

// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        // backgroundImage: {logo},
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
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

    return (
        // <Card alignItems="center"
        // justify="center" className={classes.root}>
        // <CardContent>
        <div 
        >
            <br></br>
            <br></br>

            <Grid container
                direction="row"
                justify="center"
                component="main" >
                {/* <CssBaseline /> */}

                <br></br>
                <Grid item md={4} component={Paper} elevation={6}   
                >
                    <div className={classes.paper} width='50%' height='50%'>
                        {/* <Avatar className={classes.avatar}> */}
                        {/* <LockOutlinedIcon /> */}
                        {/* </Avatar> */}
                        <Typography component="h1" variant="h5">
                            ساخت حساب کاربری
          </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
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

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="نام کاربری"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="phone number"
                                label="شماره همراه"
                                id="phone number"

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


                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="تکرار رمز عبور"
                                type="password"
                                id="password"


                            />
                            <br></br>
                            <Grid style={{textAlign:"right", justify:"right"}}>
              
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
                        <Link href="#" variant="body1"  color="#65ccb8" alignItems="flex" >
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
        // </CardContent>
        // </Card>
    );
}