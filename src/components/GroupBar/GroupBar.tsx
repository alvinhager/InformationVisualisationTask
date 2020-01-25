import * as React from 'react';
import { useEffect } from 'react';
import * as d3 from 'd3';
import classes from './GroupBar.module.scss';

interface GroupBarProps {
    math?: number;
    programming?: number;
    communication?: number;
    HCI?: number;
    visAndDrawing?: number;
    maxPoints?: number;

    lengthOfFullBar?: number;
    heightOfBar?: number;
};

const GroupBar: React.FunctionComponent<GroupBarProps> = ({ math = 0.5, programming = 0.5, communication = 0.5, HCI = 0.5, visAndDrawing = 0.5, maxPoints = 0.5, lengthOfFullBar = 0.5, heightOfBar = 0.5 }) => {

    let total_points = math + programming + communication + HCI + visAndDrawing;
    let barLength = (total_points / maxPoints) * lengthOfFullBar;

    let length_math = math / total_points * barLength;
    let length_programming = programming / total_points * barLength;
    let length_communication = communication / total_points * barLength;
    let length_HCI = HCI / total_points * barLength;
    let length_visAndDrawing = visAndDrawing / total_points * barLength;

    let mathLabel = ' ' + Math.round(total_points * 10) + ' math (' + Math.round(math / total_points * 100) + '% )';
    let programmingLabel = Math.round(programming * 10) + ' programming (' + Math.round(programming / total_points * 100) + '% )';
    let communicationLabel = Math.round(communication * 10) + ' communication (' + Math.round(communication / total_points * 100) + '% )';
    let HCILabel = Math.round(HCI * 10) + ' HCI' + Math.round(HCI / total_points * 100) + ')';
    let visAndDrawingLabel = Math.round(visAndDrawing * 10) + ' visualisation and drawing (' + Math.round(visAndDrawing / total_points * 100) + '% )';

    let distributionLabel = mathLabel + ' ' + programmingLabel + ' ' + communicationLabel + ' ' + HCILabel + ' ' + visAndDrawingLabel;

    let colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

    let bar_math = <div style={{ borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px', backgroundColor: colors[0], height: heightOfBar + 'px', width: length_math + 'px' }}></div >;
    let bar_programming = <div style={{ backgroundColor: colors[1], height: heightOfBar + 'px', width: length_programming + 1 + 'px' }}></div >;
    let bar_communication = <div style={{ backgroundColor: colors[2], height: heightOfBar + 'px', width: length_communication + 'px' }}></div >;
    let bar_HCI = <div style={{ backgroundColor: colors[3], height: heightOfBar + 'px', width: length_HCI + 'px' }}></div >;
    let bar_visAndDrawing = <div style={{ borderTopRightRadius: '4px', borderBottomRightRadius: '4px', backgroundColor: colors[4], height: heightOfBar + 'px', width: length_visAndDrawing + 'px' }}></div >;

    return <div className={classes.GroupBar}>
        {bar_math}
        {bar_programming}
        {bar_communication}
        {bar_HCI}
        {bar_visAndDrawing}
        <div className={classes.label}> {'total: ' + (Math.round(total_points * 10)) + '  skill points'}</div>
        {/* <div className={classes.distributionLabel}> {distributionLabel}</div> */}

    </ div >
};


export default GroupBar;