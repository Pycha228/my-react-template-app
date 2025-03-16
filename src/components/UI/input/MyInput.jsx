import React from 'react';
import { myInput } from './MyInput.module.css';

const MyInput = (props) => {
    return <input className={myInput} {...props} />;
};

export default MyInput;
