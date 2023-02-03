import React, { useEffect, useState } from 'react';
import ManageStudents from './ManageStudents';

const LoadDataFromDatabase = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageStudents')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    // console.log(info)
    // console.log(info[0]?.fname)
    return (
        <div>
            
            {/* {
                info?.map(oneStudentInfo => <ManageStudents key={oneStudentInfo._id} oneStudentInfo={oneStudentInfo}></ManageStudents>)
            } */}
            {/* {
                info.length
            } */}
        </div>
    );
};

export default LoadDataFromDatabase;