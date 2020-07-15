import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
        borderRadius: "25px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    edit: {
        backgroundColor: "#65ccb8",
        "&:hover, &.Mui-focusVisible": {backgroundColor: "#65ccb8"},
        boxShadow: "0 4px 8px 0 rgba(101, 204, 184, 1), 0 4px 10px 0 rgba(0,0,0,0.19)",
    }

}));

export default function RecipeReviewCardOut(props) {
    const classes = useStyles();
    const [bookmark, setBookmark] = React.useState(props.bookmark);

    const handleClick = (event) => {
        setBookmark(!bookmark);
    };

    return (
        <Card className={classes.root} style={{position: "relative"}}>
            <CardMedia
                className={classes.media}
                image={props.image}
                // title="Paella dish"
            />
            <CardContent>
                <Grid
                    container
                    direction="column"
                    // direction="row"
                    // justify="space-between"
                    // alignItems="center"
                >
                    <Typography gutterBottom variant="h6" component="h2" style={{marginLeft: "auto"}}>
                        {props.title}
                    </Typography>

                    {/*another shape with this and without auto up*/}

                    {/*<Grid*/}
                    {/*    container*/}
                    {/*    direction="row"*/}
                    {/*    justify="space-between"*/}
                    {/*    alignItems="center"*/}
                    {/*>*/}

                    <Typography variant="body2" component="p">
                    آشپز خوب
                    </Typography>

                    {/*<IconButton aria-label="add to favorites" onClick={event => handleClick(event)}>*/}
                    {/*    {bookmark ? <BookmarkIcon/> : <BookmarkBorderIcon/>}*/}
                    {/*</IconButton>*/}
                    {/*</Grid>*/}
                </Grid>
            </CardContent>
        </Card>
    );
}
