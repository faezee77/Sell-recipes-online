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
import chef from "../../../public/images/food.jpg"
import classNames from 'classnames'

import { withStyles,createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import {primaryColor, secondryColor} from "../../constants/defaultsValues";
import clsx from "clsx";
import pic from "../../../public/images/pic.jpg";

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
        paddingTop:'40px'
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
        backgroundImage: `url(${pic})`,
        paddingTop:'70px',
        paddingBottom:'95px'
    },
    myimg:{
        position:"relative",
        height:'430px'
    },
    mytxt:{
        position:"absolute",
        right: '30px',
        bottom:'20px',
        color:'white',
        fontSize:'20px'
    },
}));

export default function Verification(props) {
    const classes = useStyles();

    return (
        // <div className={classes.root}>
        //     <Grid container
        //           direction="row"
        //           justify="center"
        //           component="main"
        //           className={classes.root}
        //     >


                <Grid item md={12}  elevation={6}>
                    <div className={classes.paper} width='50%'>
                        {/*<Typography component="h1" variant="h5">*/}
                        {/*    احراز کاربر*/}
                        {/*</Typography>*/}
                        <form className={classes.form} noValidate>

                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                margin="normal"
                                disabled
                                fullWidth
                                name="phone number"
                                label="09036894343"
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
                            <p style={{ textAlign: "right", justify: "right" ,fontSize:'14px'}}>
                                درصورت عدم دریافت کد تایید <a href='#'>اینجا  </a>را کلیک کنید
                            </p>



                        </form>

                    </div>
                </Grid>


    );
}