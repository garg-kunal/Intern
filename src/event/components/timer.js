import React, { useState, useEffect } from 'react';
import loc from '../assets/images/il-3.png'
import time from '../assets/images/il-4.png'
import cal from '../assets/images/calender.png'
import { render } from '@testing-library/react';


export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 24,
            value:"Loading...."
        }
    }


    timerurn() {
        var countDownDate = new Date("Oct 16, 2020 16:00:00").getTime();

        var x = setTimeout(()=>{

            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.setState({
                value: seconds + "S"
            })
            // document.getElementById('time-js-event').innerHTML =;
//days + "D " + hours + "H " + minutes + "M " +git 

            if (distance < 0) {
                clearInterval(x);
                this.setState({
                    value:"Event Day"
                })

            }
            setTimeout( this.timerurn(),1000);
        });
    }
    componentDidMount() {
        setTimeout( this.timerurn(),1000);
       
    }
    render() {
        return (
            <div className="container-fluid timer-transparent">
                <br />
                <section className="container container-event-timer mx-auto">
                    <div className="row no-gutters pt-4 pb-3">
                        <div className="col-md-4 col-4 mx-auto text-center">
                            <img src={loc} className="img-fluid location-event" /><br /><br />
                            <p className="event-timer-txt">Online</p>
                        </div>
                        <div className="col-md-4 col-4 mx-auto text-center">
                            <img src={time} className="img-fluid location-event" /><br /><br />
                            <p className="event-timer-txt  event-time-timer" id="time-js-event">{this.state.value}</p>

                        </div>
                        <div className="col-md-4 col-4 text-center mx-auto">
                            <img src={cal} className="img-fluid location-event" /><br /><br />
                            <p className="event-timer-txt">16-17 Oct</p>

                        </div>

                    </div>

                </section>
                <br />
            </div>
        )
    }

}