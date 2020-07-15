import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from '../components/card'
import pic1 from '../../../public/images/1.jpg'
import pic2 from '../../../public/images/South-Indian-Bruschetta-Recipe.jpg'
import pic3 from '../../../public/images/images.jpg'
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft:17,
        marginTop:50,
        justifyContent:"center",
        justifyItems:"center",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid:{
        marginTop:50
    },
    divider:{
        marginBottom:10
    },
    title:{
        textAlign:"center",
        marginTop:30
    },
}));

export default function NestedGrid() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <RecipeReviewCard srcimg={pic1}/>
                </Grid>
                <Grid item xs={3}>
                    <RecipeReviewCard srcimg={pic2}/>
                </Grid>
                <Grid item xs={3}>
                    <RecipeReviewCard srcimg={pic3}/>
                </Grid>
                <Grid item xs={3}>
                    <RecipeReviewCard srcimg={pic3}/>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div>

            <Typography className={classes.title}  variant="h5" noWrap>
                برترین ها
            </Typography>
            <Divider className={classes.divider}/>

            <Grid container className={classes.root}>

                <Grid container item xs={12} >
                    <FormRow />
                </Grid>
                <Grid className={classes.grid} container item xs={12} >
                    <FormRow />
                </Grid>

            </Grid>
        </div>
    );
}
