
import React from 'react';
import {FaTimes,FaPen,FaRegCircle} from 'react-icons/fa';

const icon = (props) => {
 
    switch(props.name)
{
    case 'circle':
          return <FaRegCircle className="icons"/>
          
    case 'cross':
        return <FaTimes className="icons"/>
           
    default:
        return <FaPen className="icons"/>
            
              
                                
    
}

};


export default icon;