import { transform } from "framer-motion";
import { useRef, useState } from "react";

const Intro = () => {
    const [offsetY, setOffSetY] = useState(0)

    window.addEventListener("scroll", () => {
        let offset = window.scrollY;
        setOffSetY(offset)
    })
    
    return (
        <div className="intro">
            <div className="salute h-[100vh] flex justify-center items-center overflow-hidden">
            <div className="saluteTextContainer flex-[3]" style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
                    <h1 className="saluteText text-[#333] text-[60vw] cursor-default">Hi</h1>
                </div>
                <div className="saluteImgContainer flex-[1]" style={{ transform: `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`}}>
                    <img src="person.png" alt="" className="saluteImg w-[100%]" />
                </div>
            </div>
            <div className="name-container h-[100vh] bg-[rebeccapurple]">
                <h2 className="name text-[16vw] text-[#333] cursor-default text-center leading-[100vh]" style={{ transform: `translateX(${offsetY * 0.1}px)`}}>I'm Gaurav</h2>
            </div>
            <div className="job-title-container h-[100vh] dark" style={{ backgroundPositionY: `${offsetY * 0.5}px`}}>
                <h2 className="job-title text-[10vw] text-[#333] leading-[100vh] cursor-default" style={{ transform: `translateX(calc(200vh - ${offsetY}px))`}}>a Full stack</h2>
            </div>
            <div className="job-title-container h-[100vh] purple" style={{ backgroundPositionY: `${-offsetY * 0.5}px`}}>
                <h2 className="job-title text-[10vw] text-[#333] leading-[100vh] cursor-default" style={{ transform: `translateX(calc(-300vh + ${offsetY}px))`}}>Web Developer</h2>
            </div>
        </div>
    );
}

export default Intro;