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
import React, { useEffect, useState} from 'react';
import history from "./history";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


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

const users = [
  {
    firstname: "Rice",
    lastname: "Hello",
    email: "xyz@gmail.com",
    gender: "Female",
    phone: "921243627",
    faculty: "Science", 
    
  },
  {
  firstname: "Riyo",
  lastname: "Hello",
  email: "xyz@gmail.com",
  gender: "Female",
  phone: "921243627",
  faculty: "Science", 
  },
];
var values;
var setValues;  
var updated={};
var user={};
var checkupdate={};
function BasicTable(){
   const classes = useStyles();
   [values, setValues] = useState([...users]);
   if(localStorage!=null){
    user=JSON.parse(localStorage.getItem('details'));
    updated=JSON.parse(localStorage.getItem('updated'));
    console.log(updated);
    users.push(user);
   }
    if(JSON.stringify(updated) !== JSON.stringify(checkupdate)){
      let index=users.indexOf(checkupdate);
       users.splice(index,1,updated);
    }
  // console.log(user);
   // console.log(values);
  
  

  const handleRemoveRow =  () => {
    setValues(values.slice(0, -1));
  };

  const handleUpdate= item=>() =>{
    checkupdate=item;
    console.log(checkupdate);
    localStorage.setItem("update", JSON.stringify(item));
    history.push('/Update')
};

   //console.log(users);
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
        { values.map((detail,index) => (
            <TableRow key={detail.name} >
              <TableCell align='center'>{index+1}  </TableCell>
              <TableCell align="center">{detail.firstname}</TableCell>
              <TableCell align="center">{detail.lastname}</TableCell>
              <TableCell align="center">{detail.email}</TableCell>
              <TableCell align="center">{detail.gender}</TableCell>
              <TableCell align="center">{detail.phone}</TableCell>
              <TableCell align="center">{detail.faculty}</TableCell>
              <TableCell align="center">
              <Fab color="primary" size='small' onClick={handleUpdate(detail)} > 
              <EditIcon style={{ fontSize: 15 }}/></Fab> &nbsp;&nbsp;|&nbsp;&nbsp;  
              <Fab color="primary" aria-label="edit" size="small" onClick={handleRemoveRow}  >
              <DeleteIcon style={{ fontSize: 15 }} />
              </Fab>
              </TableCell>
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
