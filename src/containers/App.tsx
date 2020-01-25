import React, { useState } from 'react';
import processedStudentData, { ProcessedStudent, Skills } from '../studentData/StudentData';
import StudentList from '../components/StudentList/StudentList';
import classes from './App.module.scss';
import GroupBar from '../components/GroupBar/GroupBar';
import GroupMemberIcons from '../components/GroupMemberIcons/GroupMemberIcons';
import Groups from '../components/Groups/Groups';

const App: React.FC = () => {

  const [students, setStudents] = useState(processedStudentData);
  const [groups, setGroups] = useState([]);

  const [sortMethod, setSortMethod] = React.useState([0, 0]);

  const [highlighted, setHighlighted] = useState([false, false, false, false, false]);

  const handleMouseOverMemberIcons = (e: any) => {
    e.persist();
    console.log(e);
    const highlightedCopy = highlighted.slice();
    highlightedCopy[e._targetInst.key] = true;
    setHighlighted(highlightedCopy);
  }

  const handleMouseOutMemberIcons = (e: any) => {
    e.persist();
    const highlightedCopy = highlighted.slice();
    highlightedCopy[e._targetInst.key] = false;
    setHighlighted(highlightedCopy);
  }

  const onProgramSortClick = (columnClicked: number) => {

    let secondElem = 1;

    // we're clicking the same column again
    if (sortMethod[0] === columnClicked) {
      secondElem = (sortMethod[1] + 1) % 3;
    }

    const newState = [columnClicked, secondElem];

    console.log(newState);

    setSortMethod(newState);
  };



  return (
    < div className={classes.container} >
      <div className={classes.studentList}>
        <StudentList StudentList={students} onProgramSortClick={(num: number) => { onProgramSortClick(num) }} sortNum={sortMethod} />
      </div>
      <div className={classes.groups}>
        <Groups groups={[{ memberIds: [0] }, { memberIds: [1, 2, 3] }, { memberIds: [1, 2, 3, 4, 5, 6] }, { memberIds: [1, 2] }, { memberIds: [1, 2, 3] }, { memberIds: [1, 2, 3, 4, 5, 6] }, { memberIds: [1, 2] }, { memberIds: [1, 2, 3] }, { memberIds: [1, 2, 3, 4, 5, 6] }, { memberIds: [1, 2] }, { memberIds: [1, 2, 3] }, { memberIds: [1, 2, 3, 4, 5, 6] }]} students={students} ></Groups>
      </div >
    </div >
  );


};




export default App;
