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
    const initialInputState = { firstname: "",lastname: "",email: "",gender:"", phone: "", faculty:""};
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const {firstname, lastname, email, gender, phone, faculty} = eachEntry;

    const handleInputChange = e => {
      setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
    };

        const onSubmitHandler = (e) => {
          e.preventDefault();
          var newEntry=[];
          newEntry.push(eachEntry); 
          localStorage.setItem('details', JSON.stringify(eachEntry));
         
         history.push('/');
        };

    return(
      <Box className="Box-container" >
       <h1 className="App-heading" style={{paddingTop: '10px'}}>Create Information Form </h1> 
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
        <Button  variant="contained"  style={{margin:'25px 10px 10px 16px'}} onClick={onSubmitHandler}>Submit</Button>
       </form>
       </Box>
  );
}
export default Create;