import React from 'react';
import processedStudentData, { ProcessedStudent, Skills } from '../../studentData/StudentData';
import classes from './StudentList.module.scss';
import StudentListItem from '../StudentListItem/StudentListItem';


interface StudentListProps {
    StudentList: ProcessedStudent[];
    onProgramSortClick: (num: number) => void;
    sortNum: number[];
};

const StudentList: React.FunctionComponent<StudentListProps> = ({ StudentList, onProgramSortClick, sortNum }) => {


    const color: string = '#F6F6F6';

    const newStudentList = StudentList.slice();

    const unsortedStudentRows = StudentList.map((student, index) => {
        return <StudentListItem key={index} Student={student} ></StudentListItem>;
    });

    //programming
    const descendingProgrammingStudentRows = newStudentList.sort((b, a) => {
        return b.skills.programming - a.skills.programming;
    }).map((student, index) => {
        return <StudentListItem key={'ah' + index * 500} Student={student} ></StudentListItem>;
    });

    const ascendingProgrammingStudentRows = newStudentList.sort((a, b) => {
        return b.skills.programming - a.skills.programming;
    }).map((student, index) => {
        return <StudentListItem key={'ahh' + index} Student={student} ></StudentListItem>;
    });

    //math
    const descendingMathStudentRows = newStudentList.sort((b, a) => {
        return b.skills.math - a.skills.math;
    }).map((student, index) => {
        return <StudentListItem key={'ah' + index * 500} Student={student} ></StudentListItem>;
    });

    const ascendingMathStudentRows = newStudentList.sort((a, b) => {
        return b.skills.math - a.skills.math;
    }).map((student, index) => {
        return <StudentListItem key={'ahh' + index} Student={student} ></StudentListItem>;
    });

    // communication
    const descendingCommunicationStudentRows = newStudentList.sort((b, a) => {
        return b.skills.communication - a.skills.communication;
    }).map((student, index) => {
        return <StudentListItem key={'ah' + index * 500} Student={student} ></StudentListItem>;
    });

    const ascendingCommunicationStudentRows = newStudentList.sort((a, b) => {
        return b.skills.communication - a.skills.communication;
    }).map((student, index) => {
        return <StudentListItem key={'ahh' + index} Student={student} ></StudentListItem>;
    });

    // HCI
    const descendingHCIStudentRows = newStudentList.sort((b, a) => {
        return b.skills.HCI - a.skills.HCI;
    }).map((student, index) => {
        return <StudentListItem key={'ah' + index * 500} Student={student} ></StudentListItem>;
    });

    const ascendingHCIStudentRows = newStudentList.sort((a, b) => {
        return b.skills.HCI - a.skills.HCI;
    }).map((student, index) => {
        return <StudentListItem key={'ahh' + index} Student={student} ></StudentListItem>;
    });

    // Vis and Drawing
    const descendingVisAndDrawingStudentRows = newStudentList.sort((b, a) => {
        return b.skills.visAndDrawing - a.skills.visAndDrawing;
    }).map((student, index) => {
        return <StudentListItem key={'ah' + index * 500} Student={student} ></StudentListItem>;
    });

    const ascendingVisAndDrawingStudentRows = newStudentList.sort((a, b) => {
        return b.skills.visAndDrawing - a.skills.visAndDrawing;
    }).map((student, index) => {
        return <StudentListItem key={'ahh' + index} Student={student} ></StudentListItem>;
    });




    const studentListShown = function () {

        if (sortNum[0] == 0) return unsortedStudentRows;

        if (sortNum[0] === 1 && sortNum[1] === 0) return unsortedStudentRows;
        if (sortNum[0] === 1 && sortNum[1] === 1) return ascendingMathStudentRows;
        if (sortNum[0] === 1 && sortNum[1] === 2) return descendingMathStudentRows;

        if (sortNum[0] === 2 && sortNum[1] === 0) return unsortedStudentRows;
        if (sortNum[0] === 2 && sortNum[1] === 1) return ascendingProgrammingStudentRows;
        if (sortNum[0] === 2 && sortNum[1] === 2) return descendingProgrammingStudentRows;

        if (sortNum[0] === 3 && sortNum[1] === 0) return unsortedStudentRows;
        if (sortNum[0] === 3 && sortNum[1] === 1) return ascendingCommunicationStudentRows;
        if (sortNum[0] === 3 && sortNum[1] === 2) return descendingCommunicationStudentRows;

        if (sortNum[0] === 4 && sortNum[1] === 0) return unsortedStudentRows;
        if (sortNum[0] === 4 && sortNum[1] === 1) return ascendingHCIStudentRows;
        if (sortNum[0] === 4 && sortNum[1] === 2) return descendingHCIStudentRows;

        if (sortNum[0] === 5 && sortNum[1] === 0) return unsortedStudentRows;
        if (sortNum[0] === 5 && sortNum[1] === 1) return ascendingVisAndDrawingStudentRows;
        if (sortNum[0] === 5 && sortNum[1] === 2) return descendingVisAndDrawingStudentRows;


    }();


    const titleRow =

        <tr style={{ backgroundColor: '#283655' }}>
            <td><div style={{ color: color, padding: '10px', fontWeight: 'bold' }}>Full Name</div></td>
            <td style={{ color: color, fontWeight: 'bold', }}>Major</td>
            <td style={{ padding: '10px' }}></td>
            <td><div onClick={() => { onProgramSortClick(1) }} style={{ color: color, textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>Math</div></td>
            <td><div onClick={() => { onProgramSortClick(2) }} style={{ color: color, textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>Programming</div></td>
            <td><div onClick={() => { onProgramSortClick(3) }} style={{ color: color, textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>Communication</div></td>
            <td><div onClick={() => { onProgramSortClick(4) }} style={{ color: color, textAlign: 'center', padding: '10px 25px', fontWeight: 'bold' }}>HCI</div></td>
            <td><div onClick={() => { onProgramSortClick(5) }} style={{ color: color, textAlign: 'center', padding: '10px 25px', fontWeight: 'bold' }}>Vis. and Drawing</div></td>
            <td><div style={{ color: color, padding: '10px 10px 10px 20px', fontWeight: 'bold' }}>Interests</div></td>
        </tr >


    return (
        <div>
            <table className={classes.table}>
                <tbody>
                    {titleRow}
                    {studentListShown}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
