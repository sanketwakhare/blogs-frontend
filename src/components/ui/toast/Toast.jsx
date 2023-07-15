import React, { useState } from 'react';
import './Toast.scss';

const iconClassesMappings = {
    INFO: 'fa-info-circle',
    WARNING: 'fa-triangle-exclamation',
    ERROR: 'fa-circle-xmark',
    SUCCESS: 'fa-check-circle'
}

const Toast = (props) => {
    const { position = 'topCenter', type = 'default', delay = 3000 } = props;
    const [toastContainerClasses, setToastContainerClasses] = useState(['toast-container', 'fadeIn', position, type]);

    setTimeout(() => {
        setToastContainerClasses((prevClasses) => {
            let classes = [...prevClasses];
            // remove fadeIn
            classes = classes.filter(className => className !== 'fadeIn');
            // add fadeOut
            if (!classes.includes('fadeOut')) {
                classes.push('fadeOut');
            }
            return classes;
        });
    }, delay - 200);

    // toast icon classes
    let iconClasses = ['fa-solid'];
    iconClasses.push(iconClassesMappings[type?.toUpperCase()]);

    return (
        <div className={toastContainerClasses.join(" ")}>
            <div className='toast-icon'><i className={iconClasses.join(" ")}></i></div>
            <div className='toast-contents'>{props.children}</div>
        </div>
    )
}

export default Toast