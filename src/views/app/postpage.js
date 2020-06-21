
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import logo from './logo.svg';
import { shadows } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import PeopleIcon from '@material-ui/icons/People';
import ImageIcon from '@material-ui/icons/Image';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AlarmIcon from '@material-ui/icons/Alarm';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import ReactPlayer from 'react-player'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import './index.css';
import lasagna from "../../image/lasagna.PNG"
import {
  fade,
  ThemeProvider,

  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

// import tileData from './tileData';
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
};


const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const defaultPro = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',


  },
  paper: {
    width: '70%',
    // margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    margin: 'auto',
    backgroundColor: "primary.main"

  },

  nested: {
    paddingLeft: theme.spacing(4),
  },
  inline: {
    display: 'inline',
  },

  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  green: {
    color: '#fff',
    backgroundColor: "#3AAFA9",
  },
  sgreen: {
    color: '#fff',
    backgroundColor: "#3aaf6f"
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

}));


const DialogTitle = withStyles(useStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
export default function BorderRadius() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div >




      <Paper component="div" display="inline" className={classes.paper}>
        <Box className={classes.root} color="#3AAFA9" mb={3} mt={2} fontSize="h5.fontSize" >
          دستورپخت لازانیا
              </Box>
        <Grid justify="center" alignItems="center" container spacing={5} >

          <Grid item xs={6}>



            <Box borderColor="success.main" borderRadius="borderRadius" {...defaultPro} style={{ width: "95%" }} >
              <img borderRadius="borderRadius" style={{ width: "100%" }} src={lasagna} alt="logo" />
            </Box>

            <Grid
              style={{ textAlign: "right", justify: "right" }}
            >
              <Box
                component="div" display="inline"
                fontWeight="fontWeightBold"

                boxShadow={3}
                ml={1}
                p={2}

              >
                <FormControlLabel
                  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                  label="پسندیدن"
                  sm={6}

                />
                <FormControlLabel
                  control={<Checkbox icon={<SaveAltIcon />} checkedIcon={<SaveAltIcon />} />}
                  label="ذخیره ‌در علاقه مندی‌ها"

                />


              </Box>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Box borderColor="#3AAFA9" borderRadius={16} border={3}  width="50%" >
              <List textalign="center" direction="rtl">

                <ListItem>
                  <ListItemAvatar >
                    <Avatar className={classes.green}>
                      <PeopleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="تعداد افراد" secondary="4" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.green}>
                      <AlarmIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="زمان آماده سازی" secondary="00:30" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.green}>
                      <AttachMoneyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="قیمت" secondary="50" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.green}>
                      <FitnessCenterIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="کالری" secondary="100" />
                </ListItem>


              </List>
            </Box>

          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <Grid container spacing={3}>
      
      <Grid item xs={12} sm={4}>
        
          
        <Box boxShadow={5}>
            <Grid direction="column" item  >
              <Box fontSize="h6.fontSize" borderRadius="borderRadius" className={classes.sgreen} p={2}>
                مواد مورد نیاز
                </Box>
            </Grid>
            <List style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 0,
            }} className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.sgreen}>
                    1
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="لازانیا :یک بسته" />
              </ListItem>
              <ListItem>
                <ListItemAvatar >
                  <Avatar className={classes.sgreen}>
                    2
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="قارچ:1 عدد بزرگ" />
              </ListItem>


            </List>
          </Box>


      
      </Grid>
      <Grid item xs={12} sm={8}>
          <Box boxShadow={5} >
            <Grid alignContent="center" alignItems="center" direction="column" item  >
              <Box fontSize="h6.fontSize" borderRadius="borderRadius" className={classes.sgreen} p={2}>
                مراحل پخت
                </Box>
            </Grid>
            <List alignContent="flexWrap" alignItems="center" style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 0,
            }} className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.sgreen}>
                    1
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="ابتدا باید قارچ های شسته و خشک شده را به صورت ورقه ای خرد کنیم و در کمی روغن تفت دهیم ." />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.sgreen}>
                    2
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="مقدار کمی هم نمک روی آن می پاشیم تا مزه دار شود و روی حرارت بالا کمی تفت بخورد و آب نیندازد.

سپس پیاز ها را رنده میکنیم و در مقداری روغن تفت میدهیم به طوری که رنگ آن طلایی شود ." />
              </ListItem>


            </List>
          </Box>

      </Grid>
      </Grid>


        <Grid   >



        </Grid>
        <br></br>
        <br></br>
        <Grid container  >

          <Grid item xs={4} >



            
          </Grid>
          <Grid item xs={5} direction="row" spacing={10} justify="center" >

            
          </Grid>

        </Grid>
        {/* <CardMedia 
  component="video"
  height="140"
  image="/static/images/cards/contemplative-reptile.mp4"
  title="Contemplative Reptile" 
/> */}
        {/* <Grid container spacing={24}>

          <Grid item xs={12} sm={6}>
            <p>video</p>
            <Paper className={classes.paper}>
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
            </Paper>
          </Grid>
        </Grid> */}
        <br></br>

        <Grid container>
        </Grid>

        <Grid item sm={12} >
          <Box style={{ width: "100%", }} bgcolor='background.paper'
            m={1}
            border={1} borderColor="success.main"  >

          </Box>
        </Grid>
        <Grid item sm={12}
          style={{ width: "100%" }}

        >

          <Box boxShadow={5} >
            <Grid alignContent="center" alignItems="center" direction="column" item xs={18} >
              <Box fontSize="h6.fontSize" borderRadius="borderRadius" textAlign="left" className={classes.green} p={2}>
                نظرات
                  </Box>
            </Grid>
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="سارا"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        .این دستور فوق العاده است
              </Typography>

                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" />
                </ListItemAvatar>
                <ListItemText
                  primary="زهرا"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        بینظیر بود
              </Typography>

                    </React.Fragment>
                  }
                />
              </ListItem>



            </List>
          </Box>
<br></br>
<br></br>
<br></br>

          <TextField
            multiline
            fullWidth
            rows={8}
            className={classes.margin}
            label="نظر"
            variant="outlined"
          />
          
          <br></br>
          <br></br>
          <Button className={classes.green} variant="outlined" onClick={handleClickOpen}>
            ارسال پیام
      </Button>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle> */}
            <DialogContent dividers>
              <Typography gutterBottom>
                .نظر شما بعد از بررسی به اشتراگ گذاشته میشود
          </Typography>

            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                ok
                  </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        <Grid
  container
  direction="row"
  
>
  <br></br>
  <Grid xs={3} >
  
  </Grid>
  <Grid xs={5} justify="flex-end">
  
  </Grid>
  </Grid>
        </Paper>

    </div>

  );
}



