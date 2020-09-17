import React from 'react';
import Mid from './Mid';
import Header from './Header';
import Timer from './timer';
import Speaker from './speakerMain';
import Register from './register';
import Sponsors from './sponsors';
import Partners from './partners';
import Faq from './faqs';
import Contact from './contact';
import Footer from './footer';
import Form from './formRegister';
export default function Home() {
    return (
        <div className="container-fluid  container-event" style={{ padding: "0" }}>
            <Header />
            {/* <br/> */}
            <Timer />
            <Form/>
            {/* <br/><br/>
            <Mid/> */}
            {/* <br/><br/>
            <Speaker/>
            <br/>
            <Register/>
            <br/><br/>
            <Sponsors/>
            <br/><br/>
            <Partners/>
            <br/><br/>
            <Faq/> */}
            {/* <br/><br/>
            <Contact/> */}
            {/* <br/><br/> */}
            <Footer/>

        </div>
    )
}