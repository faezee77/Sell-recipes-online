import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import {primaryColor} from "../../constants/defaultsValues";
import pic from '../../images/pic.jpg'


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
        paddingTop:'80px',
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
        marginTop:'60px'
    },
    root:{
        backgroundImage: `url(${pic})`,
        paddingTop:'80px',
        paddingBottom:'90px'
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    papermodal: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid',
        borderColor:primaryColor,
        boxShadow: theme.shadows[3],
        padding: theme.spacing(2, 4, 3),
    },
    txtalgin:{
        textAlign:'left'
    }
}));


export default function PasswordChef(props) {
    const classes = useStyles();
    return (
                <Grid item md={12} elevation={6}
                >
                    <div className={classes.paper} width='50%'>
                        {/*<Typography component="h1" variant="h5">*/}
                        {/*    رمز عبور*/}
                        {/*</Typography>*/}
                        <form className={classes.form} noValidate>

                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="رمز عبور"
                                id="password"
                            />
                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                required
                                fullWidth
                                margin="normal"
                                id="repeat_password"
                                label="تکرار رمز "
                                name="repeat_password"
                                autoComplete="repeat_password"
                                autoFocus
                            />

                        </form>

                    </div>
                </Grid>
    );
}