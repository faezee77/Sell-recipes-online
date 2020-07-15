import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import co1 from '../../../public/images/co1.jpg'
import co2 from '../../../public/images/co2.jpg'
import co3 from '../../../public/images/co3.jpg'
import co4 from '../../../public/images/co4.jpg'
import co5 from '../../../public/images/co5.jpg'
import co6 from '../../../public/images/co6.jpg'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin:50
    },
    gridList: {
        // width: '90%',
        // height: 450,
    },
    di :{
        height:'700px'
    },
    title:{
        textAlign:"center",
        marginTop:50
    },

}));


  const tileData = [
    {
      img: co1,
      cols: 1,
    },
      {
          img: co2,
          cols: 1,
      },
      {
          img: co3,
          cols: 1,
      },
      {
          img: co4,
          cols: 0.5,
      },
      {
          img: co5,
          cols: 2,
      },
      {
          img: co6,
          cols: 0.5,
      },

  ];

export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.title}  variant="h5" noWrap>
                تازه ترین ها
            </Typography>
            <Divider className={classes.divider}/>
        <div className={classes.root}>
            <GridList cellHeight={200} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
        </div>
    );
}
