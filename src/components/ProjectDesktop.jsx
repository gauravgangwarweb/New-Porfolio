import { useState } from "react";

const ProjectDesktop = (props) => {
    const [offsetY, setOffSetY] = useState(0)

    window.addEventListener("scroll", () => {
        let offset = window.scrollY;
        setOffSetY(offset)
    })
    
    return (
        <div className="project flex items-center gap-[100px] h-[100vh] overflow-hidden">
            <div className="flex-1 w-[600px] h-[379px] relative" style={{transform: `translateX(calc(${props.scrolP} - ${offsetY}px))`}}>
                <img src="laptop.png" alt="phone" />
                <div className="laptop-screen w-[451px] h-[295px] absolute top-[18px] left-[68px] overflow-scroll">
                    <img src={props.img} alt="music-photo" className="w-[100%]" />
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-[50px] items-center">
                <h2 className="text-[7vw] text-[#555]">{props.title}</h2>
                <p className="text-[20px] text-[#555] text-justify leading-[30px]">{props.desc}</p>
                <button className="project-button px-[20px] py-[10px] bg-transparent border-[2px] border-solid border-[#555] text-[#555] cursor-pointer relative overflow-hidden">Learn More</button>
            </div>
        </div>
    );
}

export default ProjectDesktop;