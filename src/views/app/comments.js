import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
          marginTop: theme.spacing(2),
        },

      },
      large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      },
}));
function Comments(props) {  
    const classes = useStyles();
  
  return ( 
      <div>
    <List className={classes.root}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" className={classes.large} src={props.image}/>
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
             {props.name}
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
           {props.comm}
    </Typography>

          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
    <Box
        color="text.navy"
        p={2}
        position="absolute"
        top={-45}
        left="5%"
        zIndex="modal"
      >
                <FormControlLabel
        control={<Checkbox icon={<ThumbUpIcon />}  checkedIcon={<ThumbUpIcon />} name="checkedH" />}
        label="3"
      />
                      <FormControlLabel 
        control={<Checkbox icon={<ThumbDownIcon />} checkedIcon={<ThumbDownIcon />} name="checkedH" />}
        label="0"
      />
<Button color="primary">جواب دادن</Button>
              </Box>
              </ListItem>
 
    </List>
 

    </div> 
  );  

}  
export default Comments;
