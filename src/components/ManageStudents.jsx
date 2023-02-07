import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
// import { GrView } from 'react-icons/fa';
import { AiOutlineEye } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineRest } from "react-icons/ai";

const ManageStudents = () => {
    // fetch data from database
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageStudents')
            .then(res => res.json())
            .then(data => setInfo(data))
        // .then(data => console.log(data))
    }, [])
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
                                <td>
                                    {
                                        info.map((info, index) => {
                                            return (
                                                <div key={index}>
                                                    <td> {info.fname}</td>
                                                </div>
                                            )
                                        })
                                    }
                                </td>
                                <td>
                                    {
                                        info.map((info, index) => {
                                            return (
                                                <div key={index}>
                                                    <td>{info.selectClasses}</td>
                                                </div>
                                            )
                                        })
                                    }
                                </td>
                                <td>
                                    {
                                        info.map((info, index) => {
                                            return (
                                                <div key={index}>
                                                    <td> {info.rollNumber}</td>
                                                </div>
                                            )
                                        })
                                    }
                                </td>
                                <td>
                                    {
                                        info.map((info, index) => {
                                            return (
                                                <div key={index} className=''>
                                                    <div className='flex'>
                                                        <div >
                                                            <td>
                                                                {/* The button to open modal */}
                                                                <label htmlFor="my-modal-5" className="btn btn-xs">
                                                                    <AiOutlineEye>
                                                                    </AiOutlineEye>
                                                                </label>

                                                                {/* Put this part before </body> tag */}
                                                                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                                                                <div className="modal">
                                                                    <div className="modal-box w-11/12 max-w-5xl">
                                                                        <h3 className="font-bold text-lg">Name : {info?.fname} {info?.mname} {info?.lname}</h3>
                                                                        <h3 className="font-bold text-lg">City: {info?.city}</h3>
                                                                        <h3 className="font-bold text-lg">Adress 1: {info?.adress1}</h3>
                                                                        <h3 className="font-bold text-lg">Adress 2: {info?.adress2}</h3>
                                                                        <h3 className="font-bold text-lg">Pin-Code: {info?.pinCode}</h3>
                                                                        <h3 className="font-bold text-lg">Roll: {info?.rollNumber}</h3>
                                                                        <h3 className="font-bold text-lg">Class: {info?.selectClasses}</h3>
                                                                        <h3 className="font-bold text-lg">Division: {info?.selectDivisions}</h3>
                                                                        <div className="modal-action">
                                                                            <label htmlFor="my-modal-5" className="btn">ok</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </div>
                                                        <div>
                                                            <td><AiFillEdit></AiFillEdit></td>
                                                        </div>
                                                        <div>
                                                            <td> <AiOutlineRest></AiOutlineRest></td>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageStudents;

