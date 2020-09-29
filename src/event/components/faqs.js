import React, { useState } from 'react';


export default function Faq() {
    const [faq, setFaq] = useState([
        {
            question: "What is Dev Colloquium 2020?",
            answer: "Colloquium means An Academic Conference or Seminar in Latin. So, Dev Colloquium is Conference for Developers (Students)"
        },
        {
            question: "Who can Attend Dev Colloquium 2020?",
            answer: "Students, Developers, Communities & Institutions"
        },
        {
            question: "Students, Developers, Communities & Institutions",
            answer: "Yes, Dev Colloquium 2020 registration is absolutely FREE and you don’t need to pay anything to attend."
        },
        {
            question: "How do I attend Dev Colloquium?",
            answer: "Dev Colloquium is an online conference that you can attend from anywhere. The whole conference will be streamed online (Platform will be announced soon). We will share the session link a day or two before the conference day."
        },
        {
            question: "Can I ask questions in between the sessions?",
            answer: "Yes, you can ask questions to our speakers by commenting on the comment box. The speaker will answer those questions after their session ends."
        },
        {
            question:"How do I get notification for the conference and get links to join the conference?",
            answer:"Once you register for the conference we will keep you notified with all the details regarding the conference including the links to join the conference"
        },
        {
            question:"I run a community. How to make it a community partner? What is the benefit?",
            answer:"The objective of most of the developer communities is to help developers learn, upskill or adopt latest and best - and that’s the objective of the conference as well! We invite community partners to support each other in spreading the word about the conference in your community and in return, the conference will provide wider visibility to your community!"
        },
        {
            question:"I am a student - will I get a participation certificate when I attend this conference?",
            answer:"Yes, we do provide a participation certificate to those who are interested. You need to attend the conference to receive it. Towards the end of the conference, we’ll share a feedback link - in that you can mention you need the participation certificate and we’ll send it to you."
        },
        {
            question:"Can I get the supporting material (slides, code, etc) and the video recordings after the event?",
            answer:"Yes, of course. We’ll share the learning material. The session video recordings and links to slides will be shared after the conference. (Channel will be informed later.)"
        }

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