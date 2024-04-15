import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const DropDown = ({selected, setSelected}) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const [active, setActive] = useState(false);
    
    
  return (
    <div className='dropDown'>
       <div className='dropdown-btn' onClick={()=>setActive(!active)}>
       <FontAwesomeIcon icon={faArrowDownWideShort} />
        {selected ? selected : "Select day"}
       
       </div>

       <div className='pick-day-container'>
       {active && <div>
        {days.map((day)=><div className='pick-day' onClick={(e)=>{setSelected(e.target.textContent); setActive(false)}} key={day}>{day} <hr /></div>)}
        </div>}
        </div>
    </div>
  )
}

export default DropDown


