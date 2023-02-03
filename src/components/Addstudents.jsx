import React from 'react';
import Navbar from './Navbar';
import swal from 'sweetalert';

const Addstudents = () => {
    const handleForm = (event) => {
        event.preventDefault();

        const form = event?.target;
        const fname = form.fName.value;
        const mname = form.mName.value;
        const lname = form.lName.value;
        const selectClasses = form.selectClasses.value;
        const selectDivisions = form.selectDivisions.value;
        const rollNumber = form.rollNumber.value;
        const adress1 = form.adressLine1.value;
        const adress2 = form.adressLine2.value;
        const landmark = form.landmark.value;
        const city = form.city.value;
        const pinCode = form.pinCode.value;


        const info = {fname, lname, mname,rollNumber, adress1, adress2, landmark, city, pinCode, selectClasses, selectDivisions}
        // sending data to backend
        fetch('http://localhost:5000/addDetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then((res) => res.json())
            .then(data => {
                swal("Good job!", "Student details Successfully added!", "success");
                // navigate('/');
            })
            .catch(error => {
                console.log('Error:', error);
            })
        // console.log(fname, lname, mname,rollNumber, adress1, adress2, landmark, city, pinCode, selectClasses, selectDivisions);
        form.reset();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen">
                    <form onSubmit={handleForm} className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <div className="flex flex-wrap">
                                <div className=''>
                                    <div className="form-control">
                                        <input name='fName' type="text" placeholder="First Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input name='mName' type="text" placeholder="Middle Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input name='lName' type="text" placeholder="Last Name" className="input input-bordered" />
                                    </div>
                                </div>
                                {/* this part for select many item */}
                                <div className="form-control w-full max-w-xs">
                                    <select name='selectClasses' className="select select-bordered">
                                        <option disabled selected>Select Classes</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <select name='selectDivisions' className="select select-bordered">
                                        <option disabled selected>Select Divisions</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <input name='rollNumber' type="text" placeholder="Roll Number" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <textarea name='adressLine1' type="text" placeholder="Adress Line 1" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <textarea name='adressLine2' type="text" placeholder="Adress Line 2" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input name='landmark' type="text" placeholder="Landmark" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input name='city' type="text" placeholder="City" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input name='pinCode' type="text" placeholder="Pin Code" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Student</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addstudents;