import React, {useState} from 'react';
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
import chef from "../../images/food.jpg"
import classNames from 'classnames'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { withStyles,createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import {primaryColor, secondryColor} from "../../constants/defaultsValues";
import clsx from "clsx";
import Modal from "@material-ui/core/Modal";
import pic from '../../images/pic.jpg'

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
        marginTop:'60px'
    },
    root:{
        backgroundImage: `url(${pic})`,
        paddingTop:'80px',
        paddingBottom:'90px'
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
const GreenCheckbox = withStyles({
    root: {
        color: '#3AAFA9',
        '&$checked': {
            color: '#3aa2af',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);




export default function Password(props) {
    const classes = useStyles();
    const [open,setOpen]=React.useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        // <div className={classes.root}>
        //     <Grid container
        //           direction="row"
        //           justify="center"
        //           component="main"
        //           className={classes.root}
        //     >


                <Grid  md={12}  elevation={6}
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


                            {/*<Button*/}
                            {/*    // type="submit"*/}
                            {/*    fullWidth*/}
                            {/*    variant="contained"*/}
                            {/*    color="primary"*/}
                            {/*    onClick={handleOpen}*/}
                            {/*    className={classNames(classes.submit ,classes.green)}*/}
                            {/*>*/}
                            {/*    <Typography variant="h6">*/}
                            {/*        تایید*/}
                            {/*    </Typography>*/}
                            {/*</Button>*/}


                        </form>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <div className={classes.papermodal}>
                                    <h2 className={classes.txtalgin} id="transition-modal-title">ثبت نام</h2>
                                    <p className={classes.txtalgin} id="transition-modal-description">با موفقیت انجام شد</p>
                                </div>
                            </Fade>
                        </Modal>
                        {/*<Link href="passwordChef.js" variant="body1" color="#65ccb8" alignItems="flex" >*/}
                        {/*    <p  >*/}
                        {/*        ورود به حساب کاربری*/}
                        {/*    </p>*/}
                        {/*</Link>*/}
                    </div>
                </Grid>
        //         <Grid container className={classes.myimg} component={Paper} elevation={6} square item md={3} >
        //
        //             <img  width='100%' height='100%' src={chef} alt='img' />
        //             {/*<Link className={classes.mytxt} href="passwordChef.js" variant="body1" alignItems="flex" >*/}
        //             {/*    <p  >*/}
        //             {/*        ورود به حساب کاربری*/}
        //             {/*    </p>*/}
        //             {/*</Link>*/}
        //
        //         </Grid>
        //
        //     </Grid>
        // </div>

    );
}