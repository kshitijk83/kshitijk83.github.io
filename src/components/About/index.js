import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'
import profile from '../../assets/images/profile.jpeg'
import react from '../../assets/images/react.png'
import css from '../../assets/images/css.png'
import nodejs from '../../assets/images/nodejs.png'
import html from '../../assets/images/html.png'
import java from '../../assets/images/java.png'
import js from '../../assets/images/js.png'
import sass from '../../assets/images/sass.png'
import dsa from '../../assets/images/dsa.png'
import spring from '../../assets/images/spring.svg'
import c from '../../assets/images/c.png'


const About=()=>{
    const [letterClass, setLetterClass]=useState('text-animate text-animate-hover bounceIn')

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    },[])

    return(
        <>
        <div className="container about-page">
            <h1>
                <AnimatedLetters 
                strArray={['A','b','o','u','t',' ', 'm', 'e']}
                idx={15}
                letterClass={letterClass}
                />
            </h1>
            <div className="about-me">
                <div className="text-zone">
                    
                    <p>
                    I am a software developer with a zest for exploration and a willingness to accept new challenges at all times. 
                    During my college years, I experimented with everything and discovered that what keeps me sane is developing visually 
                    appealing websites that effectively represent my clients' ideas. I consider myself a JavaScript devotee (we could talk 
                    its beauty for hours :).
                    </p>
                    <p>My contributions to open source organisations such as FOSSASIA, Hasura, and Metabrainz taught me how teams function. 
                        I was also a member of my institution's web team and the web head for different technical fests organised by my 
                        university. My experience with college teams has led me to believe that cooperation is a wonderful method for 
                        producing projects, as it teaches us time management and exposes us to exciting, albeit different, ideas. </p>
                    <p>I am currently working in Paytm as a software engineer solving tasks related to wallet team, learning and exploring 
                        java spring boot and frontend as well. I have done a lot of internships during my college time as you can see in my 
                        resume :).</p>
                </div>


                <div className="img">
                        <img src={profile} alt="Kshitiz" />
                </div>
            </div>
            <div className="skills">
                <h1>
                    <AnimatedLetters 
                        strArray={['S','k','i','l','l', 's']}
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
                <div className="skill-con">
                    <div className="text-zone">
                        <p>
                        I have learnt about teamwork, handling work pressure by working in small scale or early stage startups. I have managed teams in my work and in my college with an innate passion to try out new things ofcourse. I consider myself mainly as a Frontend developer especially working with React, but have experience working in backend technologies like nodejs and Spring boot.
                        </p>
                        <ul>
                            <li>
                                <i><img src={react} alt="react" /></i>
                                <span>React</span>
                            </li>
                            <li>
                            <i><img src={js} alt="js" /></i>
                                <span>JavaScript</span></li>
                            <li><i><img src={html} alt="html" /></i>
                            <i><img src={css} alt="html" /></i>
                            <i><img src={sass} alt="html" /></i>
                                <span>HTML/CSS/SASS</span></li>
                            <li><i><img src={nodejs} alt="nodejs" /></i>
                                <span>Nodejs</span></li>
                            <li><i><img src={dsa} alt="dsa" /></i>
                                <span>Data Structure and Algorithms</span></li>
                            <li><i><img src={spring} alt="spring" /></i>
                                <span>Spring boot</span></li>
                            <li><i><img src={c} alt="c++" /></i>
                                <span>C++</span></li>
                            <li><i><img src={java} alt="java" /></i>
                                <span>Java</span></li>
                        </ul>
                    </div>
                    <div className="skill-anim">
                    <div class="ct">
                        <div class="circle-large">
                            <div class="circle-small">
                            <div class="bullseye">
                                <div class="axis horizontal"></div>
                                <div class="axis vertical">
                                <div class="bullet"></div>
                                <div class="bullet"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div class="ellipse"></div>
                        <div class="ellipse"></div>
                        <div class="ellipse"></div>
                        <div class="ellipse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Loader type="ball-grid-pulse" />
        </>
    )
}

export default About;