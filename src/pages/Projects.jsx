import { useState } from "react";
import ProjectDesktop from "../components/ProjectDesktop";
import ProjectPhone from "../components/ProjectPhone";

const Projects = () => {
    const [offsetY, setOffSetY] = useState(0)

    window.addEventListener("scroll", () => {
        let offset = window.scrollY;
        setOffSetY(offset)
    })

    return (
        <div className="flex flex-col gap-[30vh] px-[100px] py-0">
            <h1 className="text-[10vw] text-[#333]" style={{ transform: `translateY(calc(400vh - ${offsetY}px))` }}>Here are some of my projects</h1>
            {/* Project-1 */}
            <ProjectPhone img={"music-web.png"} title="Music Web" desc="Go-Music is a web app where you can listen and download your favourite music in very high quality. It is created using React, Redux and Tailwind CSS here i have used jio savan free api." scrolP={"500vh"} />
            {/* Project-2 */}
            <ProjectDesktop img={"cottage.png"} title="Cottage" desc="Cottage Booking is an app that helps users find cottages and reserve them. The app allows users to add new cottages, remove cottages, make reservations. Built with Ruby on Rails, React, Redux, and PostgreSQL" scrolP={"620vh"} />
            {/* Project-3 */}
            <ProjectPhone img={"crypto-mobile.png"} title="Crypto Stat" desc="Crypto-Stats is a single web page application where you can you can see the details of various crypto currencies. Here you can check the latest prices of crypto currencies. It is basicly a mobile app which is built using React, Redux and Tailwind Css" scrolP={"750vh"} />
            {/* Project-4 */}
            <ProjectDesktop img={"space-laptop.png"} title="Space Hub" desc="Space-Hub is a one-stop platform for all your space exploration needs. With our website, you can select the rocket and mission of your choice, and it will be displayed in your profile section for easy access. Built with the latest technologies such as React and Redux, Space Hub offers a seamless and intuitive experience for space enthusiasts and professionals alike. Whether you're looking to track a specific mission or explore the vast depths of space, Space Hub is the perfect tool for your journey." scrolP={"880vh"} />
        </div>
    );
}

export default Projects;