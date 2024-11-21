import React from 'react';
import VisibilityObserver from '../observer/visibilityObserver';

type TimeLineTextProps = {
    title: string;
    children?: React.ReactNode;
    side: string;
}

function TimeLineText({title, children, side}: TimeLineTextProps) {
    return (
        <div className={`timeLineText scroll ${side}`}>
            <VisibilityObserver className="timeLineText"/>
            <h2>{title}</h2>
            {children}
            <div className={"hidder"}></div>
        </div>
    );
}

export default TimeLineText;