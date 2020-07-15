import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import chef from "../../images/PASS.jpg"
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import {primaryColor} from "../../constants/defaultsValues";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Verification from "./verification";
import Information from "./information";
import Password from "./password";
import StepLabel from '@material-ui/core/StepLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ForgetPasswordPhone from "./forgetpasswordphone";

const ColorButton = withStyles((theme) => ({
    root: {
        color: "white",
        backgroundColor:primaryColor,
        '&:hover': {
            backgroundColor: primaryColor,
        },
    },
}))(Button);


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
        // marginTop:'60px'
    },
    root:{
        // backgroundImage: `url(${pic})`,
        paddingTop:'70px',
        // paddingBottom:'60px',
    },
    myimg:{
        position:"relative",
        height:'440px'
    },
    mytxt:{
        position:"absolute",
        left: '30px',
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
    },
    step:{
        paddingTop:'50px',
        paddingBottom:0
    },
    divcon:{
        height:'220px'
    },
    mygrid:{
        height:'440px'
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

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor:primaryColor,
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function QontoStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <AccountCircleIcon />,
        2: <PermPhoneMsgIcon />,
        3: <VpnKeyIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}
function getSteps() {
    return ['شناسه', 'احراز کاربر', 'رمز عبور'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <ForgetPasswordPhone/>;
        case 1:
            return <Verification/>;
        case 2:
            return <Password/>;
        default:
            return 'Unknown step';
    }
}

export default function ForgetPassword() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const steps = getSteps();

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <div className={classes.root}>
            <Grid container
                  direction="row"
                  justify="center"
                  component="main"
                  className={classes.root}
            >
                <Grid container className={classes.myimg} component={Paper} elevation={6} square item md={3} >

                    <img  width='100%' height='100%' src={chef} alt='img' />
                    <Link className={classes.mytxt} href="passwordChef.js" variant="body1" alignItems="flex" >
                        <p  >
                            ورود به حساب کاربری
                        </p>
                    </Link>

                </Grid>
                <Grid item md={5} className={classes.mygrid} component={Paper} elevation={6}
                >
                    <Stepper className={classes.step} nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>

                        <div>
                            <div className={classes.divcon}>
                                {getStepContent(activeStep)}
                            </div>
                            <Grid container justify="center" md={12}>
                                <Grid md={3}>
                                    <ColorButton
                                        // type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classNames(classes.submit ,classes.green,classes.button)}
                                    >

                                        <Typography variant="h6">
                                            تایید
                                        </Typography>
                                    </ColorButton>
                                </Grid>
                                <Grid md={1}/>
                                <Grid md={3}>

                                    <ColorButton
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classNames(classes.submit ,classes.green,classes.button)}
                                    >
                                        <Typography variant="h6">
                                            بازگشت
                                        </Typography>
                                    </ColorButton>
                                </Grid>
                            </Grid>
                        </div>
                    </div>

                </Grid>


            </Grid>
        </div>

    );
}