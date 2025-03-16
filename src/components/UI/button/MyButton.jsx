import React from 'react';
import { myBtn } from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
    return (
        <div>
            <button {...props} className={myBtn}>
                {children}
            </button>
        </div>
    );
};

export default MyButton;
