import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
        borderRadius: "25px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.image}
                title="Paella dish"
            />
            <CardContent>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Typography gutterBottom variant="h6" component="h2" style={{marginLeft: "auto"}}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.score}/10
                    </Typography>
                    <IconButton aria-label="add to favorites">
                        <BookmarkBorderIcon/>
                    </IconButton>
                </Grid>
            </CardContent>
        </Card>
    );
}
