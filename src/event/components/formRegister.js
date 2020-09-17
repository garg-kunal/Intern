import React, { useState, useEffect } from 'react';

export default function Form() {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [phn, setphn] = useState();
    const [city, setcity] = useState();
    const [year, setyear] = useState();
    const [clg, setclg] = useState();
    const [branch, setbranch] = useState();
    const [show, setshow] = useState(false);
    const [mobile, setmobile] = useState();

    const print = (e) => {
        e.preventDefault();
        console.log(name + email + phn + city + year + clg + year + branch);
    }


    return (
        <section className="container" id="register">
            <div className="form-register-event">

                {show ?
                    <div className="row">
                        <div className="col-md-6 col-12">
                            Illustaripns
                    </div>
                        <div className="col-md-6 col-12">
                            <form className="form-group form-event-inner mx-auto">
                                <h4 className="text-center event-form-heading">Register</h4>


                                <input type="text" className="form-control" maxLength="11" value={mobile} onChange={(e) => { setmobile(e.target.value) }}
                                    required placeholder="Registered Mobile Number" />
                                <br />

                                <div className="row mx-auto text-center">
                                    <button className="btn btn-event-register" onClick={(e) => { print(e) }}>Register</button>

                                    <p className="text-center merge-link-event" onClick={() => { setshow(!show) }} > New Member</p>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="row">
                        <div className="col-md-6 col-12">
                            Illustaripns
                    </div>
                        <div className="col-md-6 col-12">
                            <form className="form-group form-event-inner mx-auto">
                                <h4 className="text-center event-form-heading">Register</h4>

                                <input type="text" autoComplete="off" value={name} className="form-control" required placeholder="Full Name" onChange={(e) => { setname(e.target.value) }} /><br />
                                <input type="email" autoComplete="off" value={email} className="form-control" required placeholder="Email" onChange={(e) => { setemail(e.target.value) }} /><br />
                                <input type="text" autoComplete="off" value={phn} className="form-control" required placeholder="Mobile Number" maxLength="11" onChange={(e) => { setphn(e.target.value) }} /><br />
                                <input type="text" autoComplete="off" value={city} className="form-control" required placeholder="City" onChange={(e) => { setcity(e.target.value) }} /><br />
                                <input type="text" autoComplete="off" autoComplete="off" value={clg} className="form-control" required placeholder="College" onChange={(e) => { setclg(e.target.value) }} /><br />
                                <input type="text" autoComplete="off" value={branch} className="form-control" required placeholder="Branch" onChange={(e) => { setbranch(e.target.value) }} /><br />
                                <select value={year} className="form-control" required placeholder="Year" onChange={(e) => { setyear(e.target.value) }}>
                                    <option value="1">1st Year</option>
                                    <option value="2">2nd Year</option>
                                    <option value="2">3rd Year</option>
                                    <option value="4">4th Year</option>
                                </select>
                                <br />

                                <div className="row mx-auto text-center">
                                    <button className="btn btn-event-register" onClick={(e) => { print(e) }}>Register</button>

                                    <p className="text-center merge-link-event" onClick={() => { setshow(!show) }} >Already Merge Member</p>
                                </div>
                            </form>
                        </div>
                    </div>
                }



            </div>
        </section >
    )
}
