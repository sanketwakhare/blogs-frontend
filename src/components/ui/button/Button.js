import React from 'react';
import './Button.scss'

const Button = (props) => {

    const { children, variant, className, ...rest } = props;

    const btnVariant = variant || 'primary';
    const btnClasses = `btn btn-${btnVariant} ${className}`;

    return <button className={btnClasses} {...rest}>{children}</button>;
}

export default Button;