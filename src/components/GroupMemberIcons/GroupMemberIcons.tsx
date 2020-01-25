import React, { useState } from 'react';

import classes from './GroupMemberIcons.module.scss';

interface GroupMemberIconsProps {
    numberOfMembers: number;
    highlighted?: boolean[];
    radiusOfCircles: number;
    handleMouseOver?: (e: any) => void,
    handleMouseOut?: (e: any) => void
};

const GroupMemberIcons: React.FunctionComponent<GroupMemberIconsProps> = ({ numberOfMembers, highlighted, radiusOfCircles, handleMouseOver, handleMouseOut }) => {


    const getCircle = (key: number, highlighted: boolean) => <div key={key} onMouseOver={(e) => { handleMouseOver && handleMouseOver(e) }} onMouseOut={(e) => { handleMouseOut && handleMouseOut(e) }}
        style={{
            height: radiusOfCircles + 'px', width: radiusOfCircles + 'px', backgroundColor: highlighted ? 'black' : '#283655'
        }} className={classes.circle} ></div >;


    const circlesToDisplay = [];

    for (var i = 0; i < numberOfMembers; i++) {
        circlesToDisplay.push(getCircle(i, highlighted !== undefined && highlighted[i]));
    }

    return <div className={classes.container} > {
        circlesToDisplay
    }</div>;

};

export default GroupMemberIcons;