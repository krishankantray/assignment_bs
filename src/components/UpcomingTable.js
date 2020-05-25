import React,{useState} from "react";
import MaterialTable from "material-table";
import {IconButton, Typography, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import Modal from './Modal'


import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import FileIcon from '../images/file.png'
import PriceIcon from '../images/Price.png'
import ReportIcon from '../images/statistics-report.png'
import CalenderIcon from '../images/calendar.png'



export default function UpcomingTable(props) {






return(
<>
  <table border="1" className="table striped">
  <tr> 
    <th>DATE</th>
    <th>CAMPAIGN</th>
    <th>VIEW</th>
    <th>ACTIONS</th>
  </tr>

  {props.data.filter(val=>{
    
    const date = new Date();
    const nicedate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON().split('T')[0];
    const todaydate = new Date(nicedate).getTime();

    if(val.createdOn-todaydate > 0) return true ;
    
    return false ;


  }).map(d=>{

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

    return(
  
      <tr>
        <td><Typography>{ monthNames[parseInt(new Date(d.createdOn).toISOString().split('T')[0].split('-')[1])]+' '+new Date(d.createdOn).toISOString().split('T')[0].split('-')[0] +', '+new Date(d.createdOn).toISOString().split('T')[0].split('-')[2] }</Typography></td>
        <td>
          <table border='0'>
                
                <tr>
                  <td rowspan="2"><img src={d.image_url+d.id+'.png'} height='50%' width='50%' /></td>
                  <td>{d.name}</td>

                  
                </tr>
                <tr>
                  <td>{d.region}</td>

                  
                </tr>
            </table>
        </td>
        <td><Modal data={d} /></td>
        <td>
            <Button varient='small'><img src={FileIcon} height='25px' width='20px'  />CSV</Button>
            <Button><img src={ReportIcon} height='25px' width='20px' />Report</Button>
            <Button><img src={CalenderIcon} height='25px' width='20px' />  </Button>
      
          <input type="date" onChange={(e)=>{ props.handleDateChange(e,d)} } />
        
           
  
        </td>
      </tr>
  
      )

})
}

  </table>
</>

  )



}