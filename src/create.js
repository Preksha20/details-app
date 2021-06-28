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
import  { useEffect} from 'react';
import { PersonalVideo, Update } from "@material-ui/icons";
import uniqueRandom from 'unique-random';



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



export const Create= props => {
     
    const classes = useStyles();
    const initialInputState = { id: "",firstname: "",lastname: "",email: "",gender:"", phone: "", faculty:""};
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const {id,firstname, lastname, email, gender, phone, faculty} = eachEntry;
    var email_re = /^.+@.+..+/;
    var email_validate=((email_re).test(email))? true: false;
    const isEnabled = email.length > 0 && phone.length > 0 && firstname.length>0 && lastname.length>0 && gender.length>0 && email_validate;
   
    const handleInputChange = e => {
      setEachEntry({ ...eachEntry, [e.target.name]: e.target.value, });
    };
      const random= uniqueRandom(1, 10);
      eachEntry.id=random();
        const onSubmitHandler = (e) => {
           let users=[];
           if(localStorage.getItem("users")){
            users=JSON.parse(localStorage.getItem('users'));
           }
           users.push(eachEntry);
           localStorage.setItem("users", JSON.stringify(users));
          history.push('/');
        };

    return(
      <Box className="Box-container" >
       <h1 className="App-heading" style={{paddingTop: '10px'}}>Create Information Form </h1> 
        <form >
        <TextField className={classes.root} id="standard-basic" label="First Name" required='true' name="firstname" value={firstname} onChange={handleInputChange} />
       <TextField className={classes.root} id="standard-basic" label="Last Name" required='true'  name="lastname" value={lastname} onChange={handleInputChange}/>
       <FormControl style={{paddingTop: '18px'}} className={classes.radio} component="fieldset">
          <FormLabel className={classes.radio} required='true' style={{paddingTop: '12px'}}>Select Your Role: </FormLabel>
          <RadioGroup  row aria-label="gender" name="gender" value={gender} onChange={handleInputChange} >
            <FormControlLabel  value="female" control={<Radio/>} label="Female" />
            <FormControlLabel value="male" control={<Radio/>} label="Male" />        
          </RadioGroup>
        </FormControl>
        <TextField className={classes.root} id="standard-basic" label="Email" required='true' name="email" value={email} onChange={handleInputChange}/>
        <TextField className={classes.root} id="standard-basic" label="Phone" required='true' name="phone" value={phone} onChange={handleInputChange}/>
        <TextField className={classes.root} id="standard-basic" label="Faculty" name="faculty" value={faculty} onChange={handleInputChange}/>
        <br></br>
        <Button disabled={!isEnabled}  variant="contained"  style={{margin:'25px 10px 10px 16px'}} onClick={onSubmitHandler}>Submit</Button>
       </form>
       </Box>
  );
}
export default Create;


