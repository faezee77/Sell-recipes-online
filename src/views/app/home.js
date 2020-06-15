import PrimarySearchAppBar from '../components/header'
import React,{Component} from "react";
import Carousel from 'react-material-ui-carousel'
import Support from "../components/support";
import image1 from '../../images/1.jpg'
import image2 from '../../images/South-Indian-Bruschetta-Recipe.jpg'
import Grid from "@material-ui/core/Grid";
import Cards from "../components/gridCard";
import ImageGridList from "../components/imagegrid"
class Home extends Component{
    render() {

        var items = [image1,image2]

        return(
                <Grid xs={12}>
                    <PrimarySearchAppBar/>
                    <Carousel
                        animation='fade'
                        navButtonsAlwaysVisible='True'
                        interval={2000}
                    >
                        {
                            items.map( item => <img height='600px' width='100%' src={item}  alt='img'/> )
                        }
                    </Carousel>
                    <Support/>
                    <Cards/>
                    <ImageGridList/>
                </Grid>

        )
    }
}

export default Home