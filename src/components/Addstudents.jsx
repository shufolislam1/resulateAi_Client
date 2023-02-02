import React from 'react';
import Navbar from './Navbar';

const Addstudents = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen">
                    <form className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className=''>
                                    <div className="form-control">
                                        <input type="text" placeholder="First Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" placeholder="Middle Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" placeholder="Last Name" className="input input-bordered" />
                                    </div>
                                </div>
                                {/* this part for select many item */}
                                <div className="form-control w-full max-w-xs">
                                    <select className="select select-bordered">
                                        <option disabled selected>Select Classes</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <select className="select select-bordered">
                                        <option disabled selected>Select Divisions</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Adress Line 2" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Landmark" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="City" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Pin Code" className="input input-bordered" />
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