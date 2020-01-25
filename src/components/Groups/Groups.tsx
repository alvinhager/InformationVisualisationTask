import React from 'react';
import { Group, ProcessedStudent, Skills, ProcessedSkills } from '../../studentData/StudentData';
import GroupMemberIcons from '../GroupMemberIcons/GroupMemberIcons';
import GroupBar from '../GroupBar/GroupBar';
import classes from './Groups.module.scss';



interface GroupsProps {
    groups: Group[];
    students: ProcessedStudent[];
};

const Groups: React.FunctionComponent<GroupsProps> = ({ groups, students }) => {

    const getPointsFromGroup = (group: Group) => {
        let mathSum = 0;
        let programmingSum = 0;
        let communicationSum = 0;
        let HCISum = 0;
        let visAndDrawingSum = 0;

        group.memberIds.forEach((studentId) => {
            const studentSkills = students[studentId].skills;
            mathSum = + studentSkills.math;
            programmingSum = + studentSkills.programming;
            communicationSum = + studentSkills.communication;
            HCISum = + studentSkills.HCI;
            visAndDrawingSum = + studentSkills.visAndDrawing;
        });

        let distributionOfPoints: ProcessedSkills = { math: mathSum, programming: programmingSum, communication: communicationSum, HCI: HCISum, visAndDrawing: visAndDrawingSum };

        return distributionOfPoints;
    };

    const getGroupViz = (group: Group, groupNum: number) => {
        return (
            <div className={classes.groups}>

                <div className={classes.groupVis}>
                    <div className={classes.label}>{'group ' + groupNum}</div>
                    <div><GroupMemberIcons numberOfMembers={group !== undefined && group.memberIds ? group.memberIds.length : 0} radiusOfCircles={20}> </GroupMemberIcons></div>
                    <div className={classes.groupBar}><GroupBar heightOfBar={20} lengthOfFullBar={5000} maxPoints={25} {...getPointsFromGroup(group)} > </GroupBar ></div>
                </div>
            </div >
        );
    };

    const getGroupsViz = (groups: Group[]) => {
        let array = groups.map((group, index) => { return <div key={index * 100}> {getGroupViz(group, ++index)} </div > });
        return array;

    };

    return <React.Fragment>{getGroupsViz(groups)}</React.Fragment>
};


export default Groups