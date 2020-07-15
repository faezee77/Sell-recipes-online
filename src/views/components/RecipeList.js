import React from 'react';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCardOut from "./RecipeReviewCard";
import {posts} from "../../data/posts";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin:50
    },

    title:{
        textAlign:"center",
        marginTop:50,
    },
    divider:{
        marginBottom:'40px'
    }
}));


export default function RecipeListOut(props) {
const classes =useStyles()
    return (
        <div>
                <Typography className={classes.title}  variant="h5" noWrap>
                    برترین ها
                </Typography>
                <Divider className={classes.divider}/>
            <Grid container justify="center"
                  spacing={3}>
                {posts.slice(0, 8).map((post, key) => (
                    <Grid item xs={6} md={3}>
                        <RecipeReviewCardOut key={key} image={post.image} title={post.title} score={post.score}
                                          review={post.review} bookmark={post.bookmark}/>
                    </Grid>
                ))}

            </Grid>
        </div>
    );
}
