
import React from 'react';
import './index.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Divider, IconButton } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AlarmIcon from '@material-ui/icons/Alarm';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
// import MovieIcon from '@material-ui/icons/Movie';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import chef from "../../image/chef.jpg"
import prof2 from "../../image/prof2.PNG"
import prof3 from "../../image/prof3.PNG"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import lasagna1 from '../../image/7.PNG';
import lasagna2 from '../../image/9.PNG';
import lasagna3 from '../../image/8.PNG';
import lasagna4 from '../../image/4.PNG';
import lasagna5 from '../../image/5.PNG';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Comments from './comments'
import Ingredient from './ingredients'
import Replycomments from './replyComment'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player'
import Button from '@material-ui/core/Button';
import VideoPlayer from 'react-video-js-player'
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import video from '../../image/film.mp4'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const A_Tabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#65ccb8',
  },
})(Tabs);

const A_Tab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    // minWidth: 100,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontSize:20,

    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#65ccb8',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


function TabPanelB(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 'fit-content',
    // border: `1px solid ${theme.palette.divider}`,
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: theme.palette.background.paper,
    // color: theme.palette.text.secondary,

    '& hr': {
      margin: theme.spacing(0, 1.5),
    },
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: "90%",

  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },

  sgreen: {
    color: '#fff',
    backgroundColor: "#65ccb8"
  },
  tabindicator: {
    backgroundColor: '#65ccb8'
  },
  label: {
    color: '#FFF000'
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
}));



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

export default function PostPage(probs) {

  const classes = useStyles();
  const [valueF, setValueF] = React.useState(0);
  const [valueS, setValueS] = React.useState(0);
  const [valuee, setValuee] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [open, setOpen] = React.useState(false);


  const handleChangeFirst = (event, newValue) => {
    setValueF(newValue);
  };
  const handleChangeSecond = (event, newValue) => {
    setValueS(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div dir="rtl">
      <Box
        // boxShadow={2}
        bgcolor="#fcfcfc"
        p={1}
        style={{ width: '100%', height: '3rem' }}>
        <Box
          color="text.primary"
          p={1}
          position="absolute"
          left="2%">

          <Typography
            component="div"
            variant="h4">
            لازانیا
          </Typography>
        </Box>

      </Box>
      <Divider/>

      <br></br>

      <br></br>
      <div>

        <div>

         <Grid justify="center">
            <Grid
              container
            // style={{
            //   display: "center",
            //   justifyContent: "center",
            //   alignItems: "center"}}
            >

              <Grid xs={8} container

                direction="row"
                justify="center"
              // alignItems="center"
              >

                <Box
                  mr={5}
                  ml={8}
                  boxShadow={3}
                  p={1}
                  style={{ width: '100%',height:"580px" }}
                  borderRadius={20}
                  bgcolor="#ffffff">

                  <div className={classes.demo1}>
                    <A_Tabs value={valueF} onChange={handleChangeFirst} aria-label="ant example">
                      <A_Tab label="آلبوم عکس ها" />
                      <A_Tab label="فیلم" />
                    </A_Tabs>
                  </div>
                  <TabPanelB  value={valueF} index={0}>
                  <Box
        bgcolor="background.paper"
        color="text.primary"
        p={2}
        position="absolute"
        top={610}
        left="48%"
      >
              <IconButton color="gray" aria-label="upload picture" component="span">
          <ArrowBackIosIcon />
        </IconButton>
      </Box>
      <Box
        bgcolor="background.paper"
        color="text.primary"
        p={2}
        position="absolute"
        top={610}
        left="17%"
      >
                    <IconButton color="gray" aria-label="upload picture" component="span">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
                    <Carousel  showArrows={true} showThumbs={true}>
                      <div >
                        <img src={lasagna1} width="50px" height="50px" />
                      </div>
                      <div>
                        <img src={lasagna2} width="50px" height="50px"/>
                      </div>
                      <div>
                        <img src={lasagna3} width="50px" height="50px"/>
                      </div>
                      <div>
                        <img src={lasagna4} width="50px" height="50px"/>
                      </div>
                      <div>
                        <img src={lasagna5} width="50px" height="50px"/>
                      </div>
                    </Carousel>
                  </TabPanelB>
                  <TabPanelB value={valueF} index={1}>
                  {/* <ReactPlayer width="100%" height="460px"  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
                  <VideoPlayer src={video}/>
                  </TabPanelB>

                </Box>
              </Grid>

              <Grid direction="column"  xs={4} >
                
  <Grid   container direction="column" justify="center" alignItems="center">
  <Box boxShadow={3}
                  p={1}
                  style={{ width: '80%' }}
                  borderRadius={20}
                  bgcolor="#ffffff" >
<br></br>

         <Grid container justify="center" alignItems="center" >
          <Avatar  className={classes.large} src={chef}>
            <PeopleIcon />
          </Avatar>


        </Grid>
          <br></br>

        <div>
          <Grid container justify="center" alignItems="center" mt={5} className={classes.root}>

            <Typography
              variant="h6">
              صدف محمدی
               </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
              variant="h6">
              آشپز حرفه ای
               </Typography>

          </Grid>
        </div>
      <br></br>

        </Box>
        
      </Grid>
      <br></br>
      <br></br>
                  <Grid container justify="center" alignItems="center">
                  <Box boxShadow={3}
                  p={1}
                  style={{ width: '80%' }}
                  borderRadius={20}
                  bgcolor="#ffffff" >
                  <List style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0,
                  }} className={classes.root}>
                    <ListItem>
                      <ListItemAvatar >
                        <Avatar className={classes.sgreen}>
                          <PeopleIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="تعداد افراد" secondary="4" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classes.sgreen}>
                          <AlarmIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="زمان آماده سازي" secondary="00:30" />
                    </ListItem>
                  </List>
                  <List style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0,
                  }} className={classes.root}>
                    <ListItem>
                      <ListItemAvatar >
                        <Avatar className={classes.sgreen}>
                          <AlarmIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="زمان پخت" secondary="2:00" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classes.sgreen}>
                          <LocalDiningIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="درجه سختی" secondary="آسان" />
                    </ListItem>
                  </List>
                  <List style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0,
                  }} className={classes.root}>
                    <ListItem flexDirection="row">
                      <ListItemAvatar>
                        <Avatar className={classes.sgreen}>
                          <AttachMoneyIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="قيمت" secondary="50" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classes.sgreen}>
                          <FitnessCenterIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="کالري" secondary="100" />
                    </ListItem>
                  </List>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Divider />
                  <Grid alignContent="flexWrap" alignItems="flex-start" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                  }} className={classes.root}
                  >
                    <Grid
                      alignContent="flexWrap" alignItems="baseline" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: 0,
                      }} className={classes.root}

                    >
                      <Grid  style={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingRight:10
                      }} >
                        <Grid style={{padding :5}} xs={2}>
                          <Typography variant="h6">امتیاز</Typography>
                        </Grid>
                        <Grid style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding:5   
                      }} xs={2}>
                          <Rating
                            name="hover-feedback"
                            value={valuee}
                            precision={0.5}
                            onChange={(event, newValue) => {
                              setValuee(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                          />
                        </Grid>

                      </Grid>
                      <FormControlLabel style={{
 
                        paddingTop:5  
                      }}
                        control={<Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkBorderIcon />} />}
                        // label="ذخیره ‌در علاقه مندی‌ها"
                        labelPlacement="start" />
                    </Grid>
                    <Grid>

                    </Grid>
                  </Grid>
                </Box>
                      </Grid>
                

              </Grid>
            </Grid>
            <br></br>
            <br></br>
            <Grid xs={12} justify="center" container>
              <Box
                mr={5}
                ml={8}
                boxShadow={3}
                p={1}
                style={{ width: '100%' }}
                borderRadius={20}
                bgcolor="#ffffff">

                <div className={classes.root}>
                  <div className={classes.demo1}>
                    <A_Tabs value={valueS} onChange={handleChangeSecond} aria-label="ant example">
                      <A_Tab label="دستور پخت" />
                      <A_Tab label="نظرات" />
                    </A_Tabs>
                    <Typography className={classes.padding} />
                  </div>

                </div>
                <TabPanelB value={valueS} index={0}>

                  {/* ingredients */}

                  <Grid item xs={12}>
                    <Grid item  >
                      <Box fontSize="h4.fontSize" >
                        مواد مورد نیاز
                      </Box>
                    </Grid>
                    <br></br>
                    <div >


                    <Grid container spacing={30}>
                    <Grid item xs={6}>
        
                        <Ingredient name1="بسته لازانیا" num1="1" am1="دو بسته" name2="نمک" num2="3" am2="دو قاشق غذاخوری" />
                      </Grid>
                        <Grid  item xs={3}>
                        <Ingredient name1="روغن زیتون " num1="2" am1="دو قاشق غذا خوری" name2="شکر" num2="4" am2="دو قاشق غذاخوری" />

                      </Grid>
                      </Grid>


                    </div>
                  </Grid>
                 <br></br>
                  {/* instructions */}
                  <Grid item >

                    <Grid item  >
                      <Box fontSize="h4.fontSize" justify="right" >
                        مراحل پخت
                   </Box>
                    </Grid>
                    <List  fontSize="h4.fontSize" alignContent="flexWrap" alignItems="center" style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 0,
                    }} className={classes.root}>
                      <ListItem>
                        <ListItemText primary=".

سپس پیاز ها را رنده میکنیم و در مقداری روغن تفت میدهیم به طوری که رنگ آن طلایی شو.

سپس پیاز ها را رنده میکنیم و در مقداری روغن تفت میدهیم به طوری که رنگ آن طلایی شو.

سپس پیاز ها را رنده میکنیم و در مقداری روغن تفت میدهیم به طوری که رنگ آن طلایی شو.

سپس پیاز ها را رنده میکنیم و در مقداری روغن تفت میدهیم به طوری که رنگ آن طلایی شو.

سپس پیاز ها را رنده میکنیم و در مقداری روغن تفت میدهیم به طوری که رنگ آن طلایی شو.

سپس پیاز ها را رنده میکنیم و در مقداری روغن تفت میدهیم به طوری که رنگ آن طلایی شوابتدا باید قارچ های شسته و خشک شده را به صورت ورقه ای خرد کنیم و در کمی روغن تفت دهیم ." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="مقدار کمی هم نمک روی آن می پاشیم تا مزه دار شود و روی حرارت بالا کمی تفت بخورد و آب نیندازد.

سپس پیاز ها را رنده میکنیم و در مقداری روغن تفت میدهیم به طوری که رنگ آن طلایی شود ." >

                        </ListItemText>
                      </ListItem>
                    </List>


                  </Grid>

                </TabPanelB>
                <TabPanelB value={valueS} index={1}>
                  <Comments name='سارا' comm='فوق العاده بود.' image={prof3} />
                        
                  <Replycomments/>
                  <br></br>
                  <br></br>
    <Divider variant="inset" />

                  <Comments name='علی' comm='سسی که برای لازانیا استفاده می شود دو نوع است: سس سفید و سس قرمز. برای هر نوع لازانیایی که آماده می شود یک سس کافی است. بسته به نوع ذائقه و موادی که در لازانیا استفاده می کنید می توانید سس را انتخاب کنید.'  image={prof2} />
    <Divider variant="inset"/>

                  <Comments name='sara'  comm='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.' />
    <Divider variant="inset"  />

                  <Comments name='sara'  image={prof3} comm='jhnkm' />
                  

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
                  <Button className={classes.sgreen} variant="outlined" onClick={handleClickOpen}>
                    ارسال پيام
      </Button>
                  <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>

                    <DialogContent dividers>
                      <Typography gutterBottom>
                        .نظر شما بعد از بررسي به اشتراگ گذاشته ميشود
          </Typography>

                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose} color="primary">
                        ok
                  </Button>
                    </DialogActions>
                  </Dialog>

                </TabPanelB>
              </Box>
            </Grid>

          </Grid>

          <br></br>

        </div>
      </div>

    </div>
  );

}

// ReactDOM.render(<PostPage />, document.getElementById('root'));


