import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {   makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';



import food1 from "./New/food2.jpg";
import food2 from "./New/food2.jpg";
import food3 from "./New/food3.jpg";
import food4 from "./New/food5.jpg";
import food5 from "./New/food5.jpg";
const useStyles = makeStyles((theme) => ({
    paper: {


        position:'relative',
        paddingLeft:'60px',
        paddingRight:'50px',
        //flexbox
        display:'flex',
        flexDirection:'row',
        direction:'ltr',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent:'center',

    },
    paper2: {
        display:'flex',
        flexDirection:'column',
        direction:'ltr',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        alignContent:'flex-start',

    },


    cart: {
        width:300,
        height:200,
      margin:theme.spacing(5,3,2,1),
        borderRadius: "20px",
        display:'flex',
        flexDirection:'row',
        direction:'ltr',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent:'center',

    },

    gridList: {
        width: 400,
        height: 300,
        //flexbox
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'baseline',
        alignContent:'flex-start',


    },


    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: theme.palette.background.paper,
    },
    m1: {
     marginLeft:"20px",

    },
    m2: {
        display:'flex',
        flexDirection:'row',
    },
    m3: {
        marginLeft:"200px",
        display:'flex',
        flexDirection:'row',
        direction:'rtl',
        flexWrap:'wrap',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        alignContent:'center',
    },




    context2:{
            position:'absolute',

    },


}));

const tileData = [
    {
        img:food5 ,
        title: 'I',

        cols: 2,
    },
    {
        img:food2 ,
        title:'a'
    },
    {
        img:food3 ,
        title: 'a',

    },

]


export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div  className={classes.paper}  >
                <div  className={classes.paper2}  >

                <Card className={classes.cart}>
                    <CardActionArea>

                    <GridList cellHeight={100}  cols={2}>
                {tileData.map((tile) => (
                    <GridListTile className={classes.gridList}   key={tile.img} cols={tile.cols || 1}>
                        <img  src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
                    </CardActionArea>

                </Card>

                    <div   className={classes.m2}  >
                        <div   className={classes.m1}  >
                            <Fab color="secondary"    size={"small"} aria-label="edit">
                                <EditIcon />
                            </Fab>
                        </div>
                        <div   className={classes.m3}  >
                            <Typography className={classes.heading}>کیک </Typography>

                        </div>
                    </div>
                </div>









                <div  className={classes.paper2}  >
                <Card className={classes.cart}>
                    <CardActionArea>

                        <GridList cellHeight={100} cols={2}>
                            {tileData.map((tile) => (
                                <GridListTile     className={classes.gridList}  key={tile.img} cols={tile.cols || 1}>
                                    <img  src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </CardActionArea>

                </Card>

                    <div   className={classes.m2}  >
                        <div   className={classes.m1}  >
                            <Fab color="secondary"    size={"small"} aria-label="edit">
                                <EditIcon />
                            </Fab>
                        </div>
                        <div   className={classes.m3}  >
                            <Typography className={classes.heading}>کیک </Typography>

                        </div>
                    </div>
                </div>







                    <div  className={classes.paper2}  >
                <Card className={classes.cart}>
                    <CardActionArea>

                        <GridList cellHeight={100}  cols={2}>
                            {tileData.map((tile) => (
                                <GridListTile   className={classes.gridList}  key={tile.img} cols={tile.cols || 1}>
                                    <img  src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </CardActionArea>
                </Card>
                        <div   className={classes.m2}  >
                            <div   className={classes.m1}  >
                                <Fab color="secondary"    size={"small"} aria-label="edit">
                                    <EditIcon />
                                </Fab>
                            </div>
                            <div   className={classes.m3}  >
                                <Typography className={classes.heading}>کیک </Typography>

                            </div>
                        </div>
                    </div>










                        <div  className={classes.paper2}  >
                <Card className={classes.cart}>
                    <CardActionArea>

                        <GridList cellHeight={100}  cols={2}>
                            {tileData.map((tile) => (
                                <GridListTile   className={classes.gridList}  key={tile.img} cols={tile.cols || 1}>
                                    <img  src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </CardActionArea>


                </Card>
                            <div   className={classes.m2}  >
                                <div   className={classes.m1}  >
                                    <Fab color="secondary"    size={"small"} aria-label="edit">
                                        <EditIcon />
                                    </Fab>
                                </div>
                                <div   className={classes.m3}  >
                                    <Typography className={classes.heading}>کیک </Typography>

                                </div>
                            </div>
                        </div>



                            <div  className={classes.paper2}  >
                <Card className={classes.cart}>
                <CardActionArea>

                    <GridList cellHeight={100}  cols={2}>
                        {tileData.map((tile) => (
                            <GridListTile   className={classes.gridList}  key={tile.img} cols={tile.cols || 1}>
                                <img  src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </CardActionArea>

            </Card>
                                <div   className={classes.m2}  >
                                    <div   className={classes.m1}  >
                                        <Fab color="secondary"    size={"small"} aria-label="edit">
                                            <EditIcon />
                                        </Fab>
                                    </div>
                                    <div   className={classes.m3}  >
                                        <Typography className={classes.heading}>کیک </Typography>

                                    </div>
                                </div>
                            </div>





                                <div  className={classes.paper2}  >
                <Card className={classes.cart}>
                    <CardActionArea>

                        <GridList cellHeight={100}  cols={2}>
                            {tileData.map((tile) => (
                                <GridListTile   className={classes.gridList}  key={tile.img} cols={tile.cols || 1}>
                                    <img  src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </CardActionArea>
                </Card>

                                    <div   className={classes.m2}  >
                                        <div   className={classes.m1}  >
                                            <Fab color="secondary"    size={"small"} aria-label="edit">
                                                <EditIcon />
                                            </Fab>
                                        </div>
                                        <div   className={classes.m3}  >
                                            <Typography className={classes.heading}>کیک </Typography>

                                        </div>
                                    </div>
                                </div>

                                    <div  className={classes.paper2}  >
                <Card className={classes.cart}>
                    <CardActionArea>

                        <GridList cellHeight={100}  cols={2}>
                            {tileData.map((tile) => (
                                <GridListTile className={classes.gridList}    key={tile.img} cols={tile.cols || 1}>
                                    <img  src={tile.img} alt={tile.title} />
                                </GridListTile>

                            ))}
                        </GridList>

                    </CardActionArea>




                </Card>
                                        <div   className={classes.m2}  >
                                        <div   className={classes.m1}  >
                                        <Fab color="secondary"    size={"small"} aria-label="edit">
                                            <EditIcon />
                                        </Fab>
                                    </div>
                                        <div   className={classes.m3}  >
                                            <Typography className={classes.heading}>کیک </Typography>

                                    </div>
                                    </div>
                                    </div>





            </div>

        </div>

    );
}

