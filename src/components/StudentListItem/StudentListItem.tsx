import * as React from 'react';
import { ProcessedStudent, Skills, ProcessedSkills } from '../../studentData/StudentData';
import classes from './StudentListItem.module.scss';
import SkillBar from '../SkillBar/SkillBar';
import './StudentListItem.module.scss';

interface StudentListItemProps {
    Student: ProcessedStudent;
};

const StudentListItem: React.FunctionComponent<StudentListItemProps> = (props) => {

    const blankColumn = <td className={classes.blankColumn}></td>;
    const nameCol = <td><div className={classes.nameColumn}>{props.Student.name}</div></td>
    const major = <td className={classes.majorColumn}>{props.Student.major}</td>;
    const interests = <td className={classes.interests}>{props.Student.interests.join(" ")}</td>;

    let student = props.Student;

    let math = student.skills.math;
    let programming = student.skills.programming;
    let communication = student.skills.communication;
    let HCI = student.skills.HCI;
    let visAndDrawing = student.skills.visAndDrawing;


    const skillBars =
        <React.Fragment>
            <td> <SkillBar heightOfBar={20} lengthOfBar={80} fractionCovered={math} colour='#ee4035' /></td>
            <td> <SkillBar heightOfBar={20} lengthOfBar={80} fractionCovered={programming} colour='#f37736' /></td>
            <td> <SkillBar heightOfBar={20} lengthOfBar={80} fractionCovered={communication} colour='#fdf498' /></td>
            <td> <SkillBar heightOfBar={20} lengthOfBar={80} fractionCovered={HCI} colour='#7bc043' /></td>
            <td> <SkillBar heightOfBar={20} lengthOfBar={80} fractionCovered={visAndDrawing} colour='#0392cf' /></td>
        </React.Fragment>

    return (
        <React.Fragment>
            <tr>
                {nameCol}
                {major}
                {blankColumn}
                {skillBars}
                {interests}
            </tr>
        </React.Fragment>
    );


};

export default StudentListItem;
