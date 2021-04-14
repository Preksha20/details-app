import React  from "react";
import './App.css';

let countofStudents;
export const Headerpart= props => {
   let users=[];   
   if(localStorage.getItem("users")){
   users=JSON.parse(localStorage.getItem('users'));
   countofStudents= users.length;  
   }
   return(
      <header style={{height: '150px', backgroundColor: '#C7CEEA' , marginBottom: '20px'}}>
           <h1 className='App-heading' style={{color: 'black'}}>Student Information</h1>
           <p style={{paddingLeft: '20px',fontSize:'20px',}}>Total number of students: {countofStudents} </p>
      </header>
   );
}
export default Headerpart;
