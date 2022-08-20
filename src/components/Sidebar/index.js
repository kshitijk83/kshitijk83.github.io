import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBriefcase, faCode, faEnvelope, faGear, faHome, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar=()=>{
    const [show, setShow]=useState(false);
    return(
        <div className='nav-bar'>
            <Link className="logo" to="/" >
                <img src={LogoS} alt="logo" />
                {/* <img className='sub-logo' src={LogoSubtitle} alt="kshitiz" /> */}
            </Link>
            <nav className={show?'show':''}>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="experience-link" to="/experience">
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                {/* <NavLink activeclassname="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
                </NavLink> */}
                {/* <NavLink activeclassname="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
                </NavLink> */}
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/kshitiz-kumar-a0407314b/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/kshitijk83">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                {/* <li>
                    <a target="_blank" rel='noreferrer' href="https://leetcode.com/kshitijk83/">
                        <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                    </a>
                </li> */}
            </ul>
            <div id="mobile-link" onClick={()=>setShow(!show)}>
                <FontAwesomeIcon icon={faBars} color="#fff"/>
            </div>
            
        </div>
    )
}

export default Sidebar;