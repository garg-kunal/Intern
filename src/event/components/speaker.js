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
        <section className="container  d-flex flex-row flex-wrap">
            {data.map((item, key) =>
                <div key={key} className="text-center mx-auto" style={{maxWidth:"22em"}}>
                    <img src={item.image}
                        className="img-fluid rounded-circle event-speaker-image" /><br />
                    <h4 className="speaker-name">{item.name}</h4>
                    <p className="about-speaker">{item.para}</p>
                </div>
            )}



        </section>
    )
}