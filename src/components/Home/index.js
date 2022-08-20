import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss'
import Loader from 'react-loaders';

const Home=()=>{

    const [letterClass, setLetterClass]=useState('text-animate text-animate-hover bounceIn')
    const namedArray=['s', 'h', 'i', 't', 'i', 'z']
    const jobArray=['S', 'o', 'f', 't','w','a','r','e',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    },[])

    return (
        <>
        <div className="container home-page">
            <span className="tags top-tags">&lt;body&gt;</span>
            <div className="text-zone">
                <h1>
                <AnimatedLetters idx={11} strArray={['H','i',',']} letterClass={letterClass} />
                <br />
                <AnimatedLetters idx={13} strArray={['I', '\'m']} letterClass={letterClass} />
                
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters idx={15} strArray={namedArray} letterClass={letterClass} />
                <br/>
                <AnimatedLetters idx={21} strArray={jobArray} letterClass={letterClass} />
                </h1>
                <h2>Frontend Developer / Backend developer / Javascript Developer</h2>
                <Link to="/contact" className="flat-button" >CONTACT ME</Link>
                <a target="_blank" rel="noreferrer" className="flat-button" href='https://drive.google.com/file/d/1bF4q8pd8zTi4UR1CCuo_P3YeGhzbxWmu/view?usp=drivesdk' >RESUME</a>
            </div>
            <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
            <Logo />
        </div>
        <Loader type="ball-grid-pulse" />
        </>
    )
}

export default Home;