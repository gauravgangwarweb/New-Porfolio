import { useRef } from "react";

const Github = () => {
    

    return (
        <div className="h-[100vh] flex flex-col items-center justify-around">
            <h1 className="text-[100px] text-[#333] text-center">Want to see all projects?</h1>
            <div className="w-[820px]">
                <div className="p-[10px] text-[#555] text-sm flex justify-between">
                    <span>Jan</span>
                    <span>Fab</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Agu</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                </div>
                <div class="flex flex-wrap gap-[5px]">
                    {}
                </div>
                <h2 className="text-[100px] text-[#333] text-center">On GITHUB</h2>
                <div className="hidden">
                    <a href="https://github.com/gauravgangwarweb">
                        <img src="./assets/github.png" alt="" />
                        <h2>Find me on GITHUB</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Github;