import React, {useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { withStyles,createMuiTheme } from '@material-ui/core/styles';
import {primaryColor} from "../../constants/defaultsValues";
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
        // backgroundColor:'#f9f9f9f9',
        backgroundImage: `url(${pic})`,
        paddingTop:'50px',
        paddingBottom:'65px'
    },
    myimg:{
        position:"relative"
    },
    mytxt:{
        position:"absolute",
        left: '30px',
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




export default function Information(props) {
    const classes = useStyles();

    return (


                <Grid item md={12}  elevation={6}
                >
                    <div className={classes.paper} width='50%'>
                        {/*<Typography component="h1" variant="h5">*/}
                        {/*    ساخت حساب کاربر*/}
                        {/*</Typography>*/}
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
                                helperText='نام کاربری ترکیبی از حروف انگلیسی و عدد است'

                            />


                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="آدرس ایمیل یا شماره همراه"
                                id="email"

                            />

                            <Grid style={{ textAlign: "right", justify: "right" }}>

                                <FormControlLabel
                                    control={<GreenCheckbox name="checkedG" />}
                                    label={<p><a href="#">قوانین و ضوابط </a>سایت را مطالعه کرده ام و آن را می پذیرم.</p>}

                                />

                            </Grid>
                        </form>
                    </div>
                </Grid>


    );
}