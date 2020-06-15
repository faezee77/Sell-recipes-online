import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import image1 from '../../images/s2.jpg'
import pay1 from '../../images/p1.png'
import q1 from '../../images/q1.jpg'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Toolbar from "@material-ui/core/Toolbar";
const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        height: 200,
        width: 200,
        borderRadius:'50%',
        border:'6px #65ccb8 solid '
    },
    control: {
        padding: theme.spacing(2),
    },
    title:{
        textAlign:"center",
        marginTop:50
    },
    titlebox:{
        textAlign:"center",
        marginTop:10
    },

    divider:{
        marginBottom:10
    }

});

class Support extends Component{

    render() {
        const { classes } = this.props;
        const item = [
            {image:image1,
            title:'پشتیبانی 24 ساعت'},
            {image:pay1,
                title:'پرداخت مطمئن'},
            {image:q1,
                title:'تضمین کیفیت'},
            ];
        return(
            <div>

                 <Typography className={classes.title}  variant="h5" noWrap>
                     با ما تجربه کیند
                 </Typography>
                <Divider className={classes.divider}/>
             <Grid container justify="center" spacing={10}>
                 {item.map((value) => (
                     <Grid key={value} item>
                         <img className={classes.img} src={value.image} width='100%' height='100%'  alt='i'/>
                         <Typography className={classes.titlebox}  variant="h6" noWrap>
                             {value.title}
                         </Typography>
                     </Grid>
                 ))}
             </Grid>
            </div>
        )
    }
}
export default withStyles(useStyles)(Support)
