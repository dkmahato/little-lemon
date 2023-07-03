import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import './App.css';
import { Button } from '@chakra-ui/react';

const time = ['08:00','09:00','10:00','14:00','15:00']

function Times(props) {
    console.log("dip2");
    console.log(props.showTime);

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="times">
   {time.map(times => {
    return (
    <div>
      <Button onClick={(e)=> displayInfo(e)}> {times} </Button>
    </div>
        )
     })}
    <div className='dateAndTime'>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
  )
}

export default Times;