import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {DropzoneArea} from 'material-ui-dropzone'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import chef from "../../images/Cooking-Chefs-PPT-Backgrounds.jpg"
import classNames from 'classnames'

import { withStyles,createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import {primaryColor, secondryColor} from "../../constants/defaultsValues";
import clsx from "clsx";

const theme = createMuiTheme({
    overrides: {
        MuiDropzoneArea:{
            root:{
                height:'100px',
                // minHeight:'100px'
            },
            text:{
                display: 'none'
            },
            icon:{
                marginTop: '25px',
                color:primaryColor
            }
        },
        MuiDropzoneSnackbar: {
            errorAlert: {
                backgroundColor: "#AFA",
                color: "#000"
            },
            successAlert: {
                backgroundColor: "#ffaaaa",
                color: "#000"
            },
        }
    }
});

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#3AAFA9',
            borderColor: '#3AAFA9'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3AAFA9',
        },
        '& .MuiOutlinedInput-root': {

            '&.Mui-focused fieldset': {
                borderColor: '#3AAFA9',
            },
        },

    },
})(TextField);
const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(4, 4),
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
        backgroundColor: "#3AAFA9",
        marginTop:'10px'
    },
    root:{
        paddingTop:'10px',
        paddingBottom:'15px'
    },
    myimg:{
        position:"relative"
    },
    mytxt:{
        position:"absolute",
        right: '30px',
        bottom:'20px',
        color:'white',
        fontSize:'20px'
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




export default function SignUp(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container
                  direction="row"
                  justify="center"
                  component="main"
                  className={classes.root}
            >


                <Grid item md={4} component={Paper} elevation={6}
                >
                    <div className={classes.paper} width='50%'>
                        <Typography component="h1" variant="h5">
                            تایید
                        </Typography>
                        <form className={classes.form} noValidate>

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
                                required
                                fullWidth
                                margin="normal"
                                id="code"
                                label="کد تایید"
                                name="code"
                                autoComplete="code"
                                autoFocus
                            />


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={()=>props.history.push('verification')}
                                className={classNames(classes.submit ,classes.green)}
                            >
                                <Typography variant="h6">
                                    تایید
                                </Typography>
                            </Button>


                        </form>
                        {/*<Link href="password.js" variant="body1" color="#65ccb8" alignItems="flex" >*/}
                        {/*    <p  >*/}
                        {/*        ورود به حساب کاربری*/}
                        {/*    </p>*/}
                        {/*</Link>*/}
                    </div>
                </Grid>
                <Grid container className={classes.myimg} component={Paper} elevation={6} square item md={3} >

                    <img  width='100%' height='100%' src={chef} alt='img' />
                    {/*<Link className={classes.mytxt} href="password.js" variant="body1" alignItems="flex" >*/}
                    {/*    <p  >*/}
                    {/*        ورود به حساب کاربری*/}
                    {/*    </p>*/}
                    {/*</Link>*/}

                </Grid>

            </Grid>
        </div>

    );
}