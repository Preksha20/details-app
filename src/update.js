import React , { useState } from "react";
import './App.css';
import Box from '@material-ui/core/Box';
import { makeStyles, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import history from './history';
import  { useEffect,  } from 'react';



    const useStyles = makeStyles((theme) => ({
        root: {
            paddingLeft: '10px',
            paddingRight: '10px',
          '& > *': {
            margin: theme.spacing(1),
            width: '48ch',
            paddingLeft: '10px',
            paddingRight: '10px',
          },
        },
        radio:  {
            paddingTop: '10px', 
            paddingLeft: '10px',
            paddingRight: '10px',
            color: 'black', 
            display: 'flex',
            flexWrap: 'nowrap', 
            flexDirection: 'row', 
          },   
     }));
     var user={};
   

export const Update= props => {
        
      const classes = useStyles();
     
       user=JSON.parse(localStorage.getItem('update'));
      
      const [eachUpdate, setEachUpdate] = useState(user);
      const {id,firstname, lastname, email, gender, phone, faculty} = eachUpdate;
       const onUpdateHandler = (e) => {
        let users=[];   
        if(localStorage.getItem("users")){
         users=JSON.parse(localStorage.getItem('users'));  
         console.log(users);
        }
        let findUser= users.findIndex(value=>value.id===user.id);
        console.log(findUser);
        if( findUser!==-1){
          users[findUser]=eachUpdate;
          localStorage.setItem("users", JSON.stringify(users));
        }
           history.push('/');
        };

        const handleInputChange = e => {
            setEachUpdate({ ...eachUpdate, [e.target.name]: e.target.value });
            
          };
    return(
      <Box className="Box-container" >
       <h1 className="App-heading" style={{paddingTop: '10px'}}>Update Information Form </h1> 
        <form >
        <TextField className={classes.root} id="standard-basic" label="First Name" name="firstname" value={firstname} onChange={handleInputChange} />
       <TextField className={classes.root} id="standard-basic" label="Last Name" name="lastname" value={lastname} onChange={handleInputChange}/>
       <FormControl style={{paddingTop: '18px'}} className={classes.radio} component="fieldset">
          <FormLabel className={classes.radio} style={{paddingTop: '12px'}}>Select Your Role: </FormLabel>
          <RadioGroup  row aria-label="gender" name="gender" value={gender} onChange={handleInputChange} >
            <FormControlLabel  value="female" control={<Radio/>} label="Female" />
            <FormControlLabel value="male" control={<Radio/>} label="Male" />        
          </RadioGroup>
        </FormControl>
        <TextField className={classes.root} id="standard-basic" label="Email" name="email" value={email} onChange={handleInputChange}/>
        <TextField className={classes.root} id="standard-basic" label="Phone" name="phone" value={phone} onChange={handleInputChange}/>
        <TextField className={classes.root} id="standard-basic" label="Faculty" name="faculty" value={faculty} onChange={handleInputChange}/>
        <br></br>
        <Button  variant="contained"  style={{margin:'25px 10px 10px 16px'}} onClick={onUpdateHandler}>Update</Button>
       </form>
       </Box>
  );
}
export default Update;

