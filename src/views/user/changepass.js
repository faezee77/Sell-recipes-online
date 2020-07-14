import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Grid, Divider } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
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
    root: {
        height: '100vh',
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
        backgroundColor: "#65ccb8",
    },

}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container item

            style={{
                width: "100%",
                display: "center",
                justifyContent: "center",
                alignItems: "center",
                justyfy:"center"
            }}
        >

                <Box
                    boxShadow={3}
                    p={1}
                    style={{ width: '500px' }}
                    borderRadius={11}
                    bgcolor="#ffffff"
marginTop={15}
                >
                    <Grid container spacing={30}  item>

                        <Grid item >
                            <div className={classes.paper} width='50%' height='50%'>

                                <Typography component="h1" variant="h5">
                                    تغيير رمز عبور
                                   </Typography>
                                <form className={classes.form} noValidate>
                                <CssTextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        margin="normal"
                                        label="رمز عبور فعلی"
                                        type="password"


                                    />
                                    <CssTextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        margin="normal"
                                        label="رمز عبور جديد"
                                        type="password"


                                    />
                                    <CssTextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        margin="normal"
                                        label="تکرار رمز عبور جديد"
                                        type="password"


                                    />
                                    <br></br>
                                    <br></br>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit, classes.green}
                                    >
                                        <Typography variant="h6">
                                            تغيير رمز
                                        </Typography>
                                    </Button>
                                </form>
                            </div>

                        </Grid>

                    </Grid>
                </Box>
        </Grid>
    );
}