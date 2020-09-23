import React, { useState } from 'react';


export default function Speaker() {

    const [data, setData] = useState([
        {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
         {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            name: "Test",
            image: "https://cdn.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
    ])
    return (
        <section className="container-fluid">
            <h4 className="text-center">Companies</h4>

            <div className="container  d-flex flex-row flex-wrap">
                {data.map((item, key) =>
                    <div key={key} className="text-center mx-auto" style={{ minWidth: "14rem", padding: "15px" }}>
                        <img src={item.image}
                            className="img-fluid rounded-circle event-speaker-image-company" /><br />
                        <h4 className="speaker-name"></h4>

                    </div>
                )}



            </div>
        </section>
    )
}