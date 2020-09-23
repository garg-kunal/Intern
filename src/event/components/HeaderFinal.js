import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import Form from './formRegister';
import iform from './imfraemForm';
import IForm from './imfraemForm';
export default function Head() {
    return (
        <div className="container-fluid container-header-event">
            <Navbar />
            <div className="row no-gutters">
                <div className="col-md-6 col-12">
                    <Header />
                </div>
                <div className="col-md-6 col-12 mx-auto">
                    <Form />
                    {/* <IForm/> */}
                </div>
            </div>
        </div>
    )
}