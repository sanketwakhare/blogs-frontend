import React from 'react'
import './Chips.scss';

const Chips = (props) => {
    const { tags, className, ...rest } = props;
    const chipsContainerClasses = `chips-container ${className ? className : ''}`;

    return (
        <div className={chipsContainerClasses} {...rest}>
            {tags.map((tag) => {
                return <div className="chip">{tag}</div>;
            })}
        </div>
    )
}

export default Chips;
