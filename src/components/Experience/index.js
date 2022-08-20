import { useEffect, useState } from "react";
import Loader from "react-loaders";
import data from "../../data.json"
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'

const Experience=()=>{

    const [letterClass, setLetterClass]=useState('text-animate text-animate-hover bounceIn')

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    },[])

    useEffect(()=>{
        const con=document.querySelector('.container')
        con.addEventListener('scroll', timeline, {passive:true});

        function timeline(){
            const con=document.querySelector('.container')
            var threshold_position = con.scrollTop + window.innerHeight * 2/3;

            var timeline_events = document.querySelectorAll('.timeline li');

            for(var event of timeline_events){
                
                if(event.offsetTop < threshold_position){
                    event.classList.add('visible');
                } else {
                    event.classList.remove('visible');
                }
            }
        }
        setTimeout(() => {
            var timeline_events = document.querySelectorAll('.timeline li');
            timeline_events[0].classList.add('visible');
        }, 2000);

        setTimeout(() => {
            var timeline_events = document.querySelectorAll('.timeline li');
            timeline_events[1].classList.add('visible');
        }, 2800);
    },[])

    return(
        <>
        <div className="container scrolly">
            <div className="experience-page">
                <div className="title">
                    <h1>
                        <AnimatedLetters
                        strArray={['W','o','r','k',' ','E','x','p','e','r','i','e','n','c','e']}
                        idx={15}
                        letterClass={letterClass}
                        />
                    </h1>
                </div>
                <ul className='timeline' >
                    {data.experiences.map((exp, i)=>(
                        <li key={`${exp}_${i}`}>
                            <div className={`timeline-content ${i%2?'right':'left'}`} >
                                <h4>{exp.company}</h4>
                                <em>
                                    {i%2?(<>
                                    <span>{exp.desg}</span>
                                    <span>{exp.date}</span>
                                     </>):(<><span>{exp.date}</span>
                                    <span>{exp.desg}</span> </>)}  
                                </em>
                                <p className="text">
                                    {exp.description}
                                    {/* {exp.points.map((txt, i)=>(
                                        <p key={`x_${i}`}>- {txt}</p>
                                    ))} */}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
        <Loader type="ball-grid-pulse" />
        </>
    )
}

export default Experience