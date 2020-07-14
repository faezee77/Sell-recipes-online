import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles} from '@material-ui/core/styles';
import pic from "../../images/pic.jpg";

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
        backgroundImage: `url(${pic})`,
        paddingTop:'10px',
        paddingBottom:'15px'
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




export default function SignUp(props) {
    const classes = useStyles();

    return (

                <Grid item md={12}  elevation={6}
                >
                    <div className={classes.paper} width='50%'>
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
                                name="email"
                                label="آدرس ایمیل یا شماره همراه"
                                id="email"
                            />

                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="address"
                                label="آدرس"
                                id="address"
                            />

                            <CssTextField
                                id="custom-css-outlined-input password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="creditCard"
                                label="شماره حساب"
                                id="creditCard"
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