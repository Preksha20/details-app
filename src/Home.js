import './App.css';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect} from 'react';
import history from "./history";


const ColorButton = withStyles(() => ({
  root: {
    backgroundColor: purple[500],
    marginBottom: 30,
    marginLeft: 1110,
    '&:hover': {
      backgroundColor: purple[700],
     
    },
  }, 
}))(Button);



const useStyles = makeStyles({

  tablecontainer:{
    width: '70%',
    margin: 'auto',
    border: '0.5px',
    boxShadow: '5px 5px 10px  5px lightgrey',   
  },
});

function createData(id,firstname,lastname,email,gender,phone,faculty){
  return { id, firstname,lastname,email,gender,phone,faculty}
};


function BasicTable(){
  const classes = useStyles();
   const user=JSON.parse(localStorage.getItem('details'));
   const det=[
     createData('1','John','denver','xyz@gmail.com','female','9891412416','Science'),
     createData('2','John','denver','xyz@gmail.com','female','9891412416','Science'),
     createData('3','John','denver','xyz@gmail.com','female','9891412416','Science'),
     createData('4','John','denver','xyz@gmail.com','female','9891412416','Science'),
     createData('5',user.firstname,user.lastname,user.email,user.gender,user.phone,user.faculty),
];
  return (
    <TableContainer className={classes.tablecontainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>ID</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Faculty</TableCell>
            <TableCell align="center">Action</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
        { det.map((detail) => (
            <TableRow key={detail.name}>
              <TableCell align='center'>
                {detail.id}
         </TableCell>
              <TableCell align="center">{detail.firstname}</TableCell>
              <TableCell align="center">{detail.lastname}</TableCell>
              <TableCell align="center">{detail.email}</TableCell>
              <TableCell align="center">{detail.gender}</TableCell>
              <TableCell align="center">{detail.phone}</TableCell>
              <TableCell align="center">{detail.faculty}</TableCell>
              <TableCell align="center">{detail.action}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


class Home extends React.Component{
    render(){
        return (
          <div>
            <h1 className='App-heading'>Student Information</h1>
            <ColorButton variant="contained" color="primary" onClick={() => history.push('/Create')}>
              Add Entry
            </ColorButton>
            <BasicTable></BasicTable>
          </div>
        );
      }
      }
export default Home;
