import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, Divider, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 650,
  },
  root: {
    flexGrow: 1,
  },
  green: {
    color: '#fff',
    backgroundColor: "#65ccb8",
},
}));

function createData(name, amount) {
  return { name, amount};
}

const rows = [
  createData('شکر'," 9.0"),
  createData('شکر'," 9.0"),
  createData('نمک',"قاضق غذا خوری"),
  createData('روغن زیتوننن', "قاضق  نئن دنغذا خوری"),

];
function Ingredient(props) {
  const classes = useStyles();

  return (

      <Grid container spacing={30} >
        
        <Grid item >
        {/* <Grid  m={10} justify="center" alignItems="center" mx={5}> */}
        <TableContainer style={{width:"650px"}} >
      <Table className={classes.table} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="left">amojjny</TableCell>

          </TableRow>
        </TableHead> */}
        <TableBody>
         
            <TableRow >
              <TableCell style={{width:"5%"}} >
              <Avatar className={classes.green} >
               {props.num1}
          </Avatar>
              </TableCell>
              <TableCell style={{width:"10%"}}>
              <Typography
             >
              {props.name1}
               </Typography>
              
              </TableCell>
              <TableCell style={{width:"10%"}} align="left">
              <Typography
              >
              {props.am1}
               </Typography>
              </TableCell>

            </TableRow>
            <TableRow >
              <TableCell style={{width:"5%"}} >
              <Avatar  className={classes.green}>
              {props.num2}
          </Avatar>
              </TableCell>
              <TableCell style={{width:"10%"}}>
              <Typography>
              {props.name2}
               </Typography>
              </TableCell>
              <TableCell style={{width:"10%"}} align="left">
              <Typography>
              {props.am2}
               </Typography>
                </TableCell>

            </TableRow>
            {/* <TableRow >
              <TableCell style={{width:"5%"}} >
              <Avatar  >
                1
          </Avatar>
              </TableCell>
              <TableCell style={{width:"10%"}}>
                uhjkljnmkcsevdg
              </TableCell>
              <TableCell style={{width:"10%"}} align="left">452</TableCell>

            </TableRow> */}

        </TableBody>
      </Table>
    </TableContainer>
  {/* </Grid> */}
        </Grid>
       

      </Grid>

  );
}
export default Ingredient;
