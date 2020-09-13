import React, { useState } from 'react';


export default function Speaker() {

    const [data, setData] = useState([
        {
            name: "Test",
            image: "https://th.bing.com/th/id/OIP.dXkj6U9p3sXMrDRl6Vqo7AHaHk?pid=Api&rs=1",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://th.bing.com/th/id/OIP.dXkj6U9p3sXMrDRl6Vqo7AHaHk?pid=Api&rs=1",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://th.bing.com/th/id/OIP.dXkj6U9p3sXMrDRl6Vqo7AHaHk?pid=Api&rs=1",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://th.bing.com/th/id/OIP.dXkj6U9p3sXMrDRl6Vqo7AHaHk?pid=Api&rs=1",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
       
       
        
    ])
    return (
        <section className="container mx-auto event-schedule-container  d-flex flex-row flex-wrap">
            {data.map((item, key) =>
                <div key={key} className="card  schedule-card mx-auto">
                    <div className="row no-gutters pt-2 pb-2">
                        <div className="col-md-4 col-4 mx-auto text-center">
                            <img src={item.image}
                                className="img-fluid rounded-circle event-speaker-image-schedule" />
                        </div>
                        <div className="col-md-8 col-8 text-left ">
                            <h4 className="speaker-name-schedule ">{item.name}</h4>
                            <p className="about-speaker-schedule">{item.para}</p>
                        </div>
                    </div>
                </div>
            )}



        </section>
    )
}