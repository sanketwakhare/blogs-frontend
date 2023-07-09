import React from 'react';
import './TextField.scss';

const TextField = (props) => {

    let { className, ...rest } = props;

    let txtFieldClasses = `text-field ${className}`;

    return <input className={txtFieldClasses} {...rest}></input >;
}

export default TextField