import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Picture from '@material-ui/icons/PictureInPicture';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AlarmIcon from '@material-ui/icons/Alarm';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import MovieIcon from '@material-ui/icons/Movie';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import RTL from '../../RTL'
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import chef from "../../image/chef.jpg"
import prof1 from '../../image/profile1.jpg';

import logo from '../../assets/logo.svg';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import FormGroup from '@material-ui/core/FormGroup';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );
const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: "90%",
  
    },
    root: {
        maxWidth: 600,
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
      large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      },
}));
function ReplyComments(props) {  
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  

  return ( 
      <div>
<List>
    <Box
        // bgcolor="grey.100"
        // color="white"
        borderRadius={1}
        p={2}
        position="absolute"
        top={-40}
        left="5%"
        width="90%"
      >
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" className={classes.large} src={prof1} />
      </ListItemAvatar>
      <ListItemText
        primary={          
        <React.Fragment>
            <Typography
              component="span"
              variant="h5"
              className={classes.inline}
              color="textPrimary"
            >
           علی
            </Typography>
    

          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="h6"
              className={classes.inline}
              color="textPrimary"
            >
           من هم موافقم واقعا غذای خوبی بود. راحت و خوشمزه
    </Typography>
    

          </React.Fragment>
        }
      />
      
    </ListItem>
    </Box>
    </List>



    </div> 
  );  

}  
export default ReplyComments;
