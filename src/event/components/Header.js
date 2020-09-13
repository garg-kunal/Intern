import React, { useState } from 'react';
import '../assets/css/home.css';
import Navbar from './navbar';
import ReactRotatingText from 'react-rotating-text';
import { useEffect } from 'react';

export default function Header() {
    const [color, setColor] = useState("yellow");
    const [index, setindex] = useState(0);
    const colors = ['#59f4b2', '#ffdf2b', '#fe82a7', '#852de2'];
    const data = ['Students', 'Developers', 'Communities', 'Enthusiastic'];
    const [text, settext] = useState(data[0]);
    const open = "<";
    const close = "/>";

   
    const callback = () => {
        setindex(index + 1);
        setTimeout(callback, 2000);
    }
    setTimeout(callback,2000);

    return (
        <div className="container-fluid  container-header-event">
            <br />
            <Navbar />
            <div className="row">
                <div className="col-12 text-center event-name">
                    <span className="event-bracket">{open}</span>Dev Colloquium<span className="event-bracket">{close}</span>
                </div>
                <div className="col-12 text-center event-2020">2020</div>
            </div>

            {/* <div className="rotate-text" style={{ color: color }}>
                {text} {index}
                {/* <ReactRotatingText   items={['Students', 'Developers', 'Communities','Enthusiastic']} /> */}
            {/* </div> */} 

        </div>
    )
}