import React from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';


const Person = props => {
    
    return (
        <Toast className='characters'>
            <ToastHeader>{props.name}</ToastHeader>
            <ToastBody>{props.gender}</ToastBody>
            
        </Toast> 
    )
}
export default Person;
