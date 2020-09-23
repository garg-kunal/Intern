import React, { useState } from 'react';
import '../assets/css/home.css';
import Navbar from './navbar';
import ReactRotatingText from 'react-rotating-text';
import { useEffect } from 'react';
import Form from './formRegister';
export default function Header() {
    const [color, setColor] = useState("yellow");
    const [index, setindex] = useState(0);
    const colors = ['#59f4b2', '#ffdf2b', '#fe82a7', '#852de2'];
    const data = ['Students', 'Developers', 'Communities', 'Enthusiastic'];
    const [text, settext] = useState(data[0]);
    const open = "<";
    const close = "/>";
    const [sec, setsec] = useState();
    const [min, setmin] = useState();
    const [hrs, sethrs] = useState();
    const [day, setday] = useState();

    const timerurn = () => {
        var countDownDate = new Date("Oct 16, 2020 16:00:00").getTime();

        var x = setTimeout(() => {

            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setday(days + "D");
            sethrs(hours + "H");
            setmin(minutes + "M");
            setsec(seconds + "S");
            // document.getElementById('time-js-event').innerHTML =;
            //days + "D " + hours + "H " + minutes + "M " +git 

            if (distance < 0) {
                clearInterval(x);
                setday(0 + "D");
                sethrs(0 + "H");
                setmin(0 + "M");
                setsec(0 + "S");

            }
            setTimeout(timerurn(), 1000);
        });
    }
    useEffect(() => {

        setTimeout(timerurn(), 1000);
    })



    return (
        <div className="container-fluid" style={{ padding: "0" }}>

            <div className="row no-gutters">
                <div className="col-12  text-center event-name">
                    <span className="event-bracket">{open}</span>Dev Colloquium<span className="event-bracket">{close}</span>
                </div>
                <div className="col-12 text-center event-2020">
                    2020
                </div>

            </div>
            <div className="row">
                <div className="col-md-2 col-2 text-center mx-auto ">
                </div>
                <div className="col-md-4 col-4 text-center mx-auto ">
                    <p className="event-timer-txt  event-time-timer time-day">
                        {day}
                    </p>

                </div>
                <div className="col-md-4 col-4 text-center mx-auto">
                    <p className="event-timer-txt  event-time-timer time-hr">
                        {hrs}
                    </p>
                </div>
                <div className="col-md-2 col-2 text-center mx-auto ">
                </div>

            </div>
            <div className="row">
                <div className="col-md-2 col-2 text-center mx-auto ">
                </div>
                <div className="col-md-4 col-4 text-center mx-auto ">
                    <p className="event-timer-txt  event-time-timer time-min">
                        {min}
                    </p>
                </div>
                <div className="col-md-4 col-4 text-center mx-auto ">
                    <p className="event-timer-txt  event-time-timer time-sec">
                        {sec}
                    </p>
                </div>
                <div className="col-md-2 col-2 text-center mx-auto ">
                </div>

            </div>
        </div>

    )
}