import { useState } from "react";

const ProjectPhone = (props) => {
    const [offsetY, setOffSetY] = useState(0)

    window.addEventListener("scroll", () => {
        let offset = window.scrollY;
        setOffSetY(offset)
    })

    return (
        <div className="project flex items-center gap-[120px] h-[100vh] overflow-hidden">
            <div className="flex-1 w-[300px] h-[600px] relative" style={{transform: `translateX(calc(${props.scrolP} - ${offsetY}px))`}}>
                <img src="phone.png" alt="phone" />
                <div className="phone-screen w-[264px] h-[567px] absolute top-[17px] left-[18px] rounded-[28px] overflow-scroll">
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

export default ProjectPhone;