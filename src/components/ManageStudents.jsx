import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
// import { GrView } from 'react-icons/fa';
import { AiOutlineEye } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineRest } from "react-icons/ai";

const ManageStudents = () => {
    // console.log(oneStudentInfo)
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageStudents')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    console.log(info)
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto mt-48'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Roll No.</th>
                                <th>View / Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{info[0]?.fname} {info[0]?.mname} {info[0]?.lname}</td>
                                <td>{info[0]?.selectClasses
                                }</td>
                                <td>{info[0]?.rollNumber
                                }</td>
                                <div className='flex'>
                                    <div>
                                        <td><AiOutlineEye></AiOutlineEye></td>
                                    </div>
                                    <div>
                                        <td><AiFillEdit></AiFillEdit></td>
                                    </div>
                                    <div>
                                        <td> <AiOutlineRest></AiOutlineRest></td>
                                    </div>
                                </div>
                            </tr>
                            {/* <tr>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                <div className='flex'>
                                    <div>
                                        <td><AiOutlineEye></AiOutlineEye></td>
                                    </div>
                                    <div>
                                        <td><AiFillEdit></AiFillEdit></td>
                                    </div>
                                    <div>
                                        <td> <AiOutlineRest></AiOutlineRest></td>
                                    </div>
                                </div>
                            </tr>
                            <tr>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                                <div className='flex'>
                                    <div>
                                        <td><AiOutlineEye></AiOutlineEye></td>
                                    </div>
                                    <div>
                                        <td><AiFillEdit></AiFillEdit></td>
                                    </div>
                                    <div>
                                        <td> <AiOutlineRest></AiOutlineRest></td>
                                    </div>
                                </div>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageStudents;

