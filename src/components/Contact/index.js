import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact=()=>{
    const [letterClass, setLetterClass]=useState('text-animate text-animate-hover bounceIn')
    const formRef =useRef();

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    },[])

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs
            .sendForm(
                'service_5gx2scc',
                'template_9dgah4z',
                formRef.current,
                'o9RE67Exq44FA6j0V'
            )
            .then(()=>{
                alert("Message sent successfully")
                window.location.reload(false)
            },
            ()=>{
                alert('Failed to send message, Please try again')
            })
    }

    return(
        <>
        <div className="container contact-page">
            <span className="tags top-tags">&lt;body&gt;</span>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    strArray={['C','o','n','t','a','c','t', ' ','m','e']}
                    idx={15}
                    letterClass={letterClass}
                    />
                </h1>
                <p>
                I am constantly looking in better chances as a software developer, 
                but if you have any other requests or questions, please contact me using the form below.
                </p>
                <div className="contact-form">
                    <form ref={formRef} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                        <input placeholder="Name" type="text" name="name" required />
                        </li>
                        <li className="half">
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            required
                        />
                        </li>
                        <li>
                        <input
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            required
                        />
                        </li>
                        <li>
                        <textarea
                            placeholder="Message"
                            name="message"
                            required
                        ></textarea>
                        </li>
                        <li>
                        <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                    </form>
                </div>
            </div>
            
            <div className="map-wrap">
                <div className="info-map">
                    Kshitiz Kumar,
                    <br />
                    India
                    <br />
                    Kangra,<br />
                    Himachal Pradesh<br />
                    <br />
                    <span>kshitijdev046@gmail.com</span>
                    <br/>
                    <span>+91 9805328201</span>
                </div>
                <MapContainer center={[32.110660, 76.276809]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[32.110660, 76.276809]}>
                    <Popup>Kshitiz lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <span className="tags bottom-tags">
                &lt;/body&gt;
                <br />
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
        </div>
        <Loader type="ball-grid-pulse" />
        </>
    )
}

export default Contact