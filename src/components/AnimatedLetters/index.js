import { useState } from 'react';
import './index.scss'

const AnimatedLetters=({letterClass, strArray, idx})=>{

    return(
        <span>
            {
                strArray.map((char, i)=>(
                    <Letter key={`char${i}`} char={char} i={i} letterClass={letterClass} idx={idx} />
                ))
            }
        </span>
    )
}

const Letter=({char, i, letterClass, idx})=>{

    const [c, setC]=useState(letterClass);

    return(
        <span onMouseEnter={()=>{setC(`${letterClass} animated`)}}
        onAnimationEnd={()=>setC('text-animate')}
        key={char + i} className={`${c} _${i + idx}`}>
            {char}
        </span>
    )
}

export default AnimatedLetters;