import React, {useState, useEffect} from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import portrait from "./images/self-portrait.jpg";

export const Intro = () => {
    const openToJobs = true;
    const nouns = ["programmer", "world traveler", "web developer", "scholar", "life-long learner"];
    let time = 0;
    const [noun, setNoun] = useState(nouns[time]);

    useEffect(()=>{
        const chooseNoun = setInterval(()=>{
            setNoun(nouns[time]);
            time++;
            if (time === nouns.length) {
                time = 0;
            }
        }, 1000);
        return () => {
            clearInterval(chooseNoun);
        }
    }, [])

    return (
        <>
        <div className="intro-content">
            <h1 className="intro-title">
                I am a {noun}
            </h1>
            <h3>
                Welcome to my website. Take a look at my projects, check out my timeline, and enjoy your stay!
            </h3>
            {openToJobs ? 
            <div className="jobs-div">
                <h2 className="">I am open to job offers</h2>
                <h2><AiOutlineCheckSquare/></h2>
            </div>
            :
            ""
            }
            
        </div>
        <img className="self-portrait" src={portrait} alt="Self-Portrait" width={500} height={500}/>
        </>
    )
}

export const Biography = () => {
    return (
        <>
        
        </>
    )
}