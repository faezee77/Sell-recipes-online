import React from "react";
import Carousel from 'react-material-ui-carousel'
import Support from "../../src/views/components/support";
import image1 from '../../public/images/1.jpg'
import image2 from '../../public/images/South-Indian-Bruschetta-Recipe.jpg'
import Grid from "@material-ui/core/Grid";
import ImageGridList from "../../src/views/components/imagegrid"
import AppBar from '../../src/views/components/appbarout'
import makeStyles from "@material-ui/core/styles/makeStyles";
import RecipeList from "./components/RecipeList";

const useStyle = makeStyles((theme) => ({
    mygrid:{
        paddingTop:'64px'
    },
    mydiv:{
        padding:'0 45px'
    }

}))

export default function Main(){
        var items = [image1,image2]
    const classes = useStyle()
    return(

        <Grid>
            <Grid>
                <AppBar/>
            </Grid>
            <Grid className={classes.mygrid}>
                <Carousel
                    animation='fade'
                    // navButtonsAlwaysVisible='True'
                    interval={2000}
                >
                    {
                        items.map( item => <img height='600px' width='100%' src={item}  alt='img'/> )
                    }
                </Carousel>
                <Support/>
                <div className={classes.mydiv}>
                <RecipeList/>
                </div>
                <ImageGridList/>
            </Grid>
            </Grid>

);
}

