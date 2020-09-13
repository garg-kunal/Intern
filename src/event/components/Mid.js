import React from 'react';
import logo from '../assets/images/bulb.png';
export default function Mid() {
    return (
        <section className="container-fluid">

            <div className="row no-gutters">
                <div className="col-md-7 col-lg-7 col-12 order-1 text-center">
                    <img src={logo} className="img-fluid mx-auto  event-mid-image" />
                </div>
                <div className="col-md-5 col-lg-5 col-12 order-2 pt-5">
                    <h3 className="text-left event-mid-heading">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </h3>
                    <p className="text-left event-mid-para">
                        Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </section>
    )
}