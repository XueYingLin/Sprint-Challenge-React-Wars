import React from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';


const Person = props => {
    
    return (
        <Toast className='characters'>
            <ToastHeader>{props.name}</ToastHeader>
            <ToastBody>gender:{props.gender}  height:{props.height}</ToastBody>
            
        </Toast> 
    )
}
export default Person;
