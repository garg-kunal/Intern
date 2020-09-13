import React, { useState } from 'react';


export default function Faq() {
    const [faq, setFaq] = useState([
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            answer: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry v text of the printing and typesetting industry"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            answer: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            answer: "Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry"
        },
        {
            question: "Lorem Ipsum is simply  dummy text of the printing and typesetting industry",
            answer: "Lorem Ipsum is simply dummy text of the printing  and typesetting industry"
        },

    ])

    document.addEventListener("DOMContentLoaded", function(event) { 


        var acc = document.getElementsByClassName("accordion");
        var panel = document.getElementsByClassName('panel');
        
        for (var i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
                var setClasses = !this.classList.contains('active');
                setClass(acc, 'active', 'remove');
                setClass(panel, 'show', 'remove');
        
                if (setClasses) {
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        }
        
        const setClass=(els, className, fnName)=> {
            for (var i = 0; i < els.length; i++) {
                els[i].classList[fnName](className);
            }
        }
        
        });
    return (
        <section className="container">
            <h4 className="text-center">FAQ's</h4>
            {faq.map((item, key) =>
                <div className="mt-3 mb-3">
                    <p className="accordion">{key+1}. {item.question}?</p>
                    <div className="panel"> {item.answer}</div>
                </div>
            )}


        </section>
    )

}