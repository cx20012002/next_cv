import Image from "next/image";
import smile_icon from "@/public/images/smile_icon.svg";
import at_icon from "@/public/images/at-icon.svg";

function AboutMe() {
    return (
        <div className={"w-full relative flex flex-col overflow-hidden py-56 gap-y-60 bg-white about-me"}>
            <div>
                <div className={"flex items-center justify-center anim-text"}>
                    <div className={"text-[320px] font-black"}>About</div>
                    <div className={"min-w-[200px] relative flex items-center"}>
                        <Image className={"absolute animate-spin-slow"} src={smile_icon} alt="smile"/>
                    </div>
                    <div className={"text-[320px] font-black"}>Cubo</div>
                </div>
                <div className={"flex items-center justify-center anim-text"}>
                    <div className={"text-[320px] font-black"}>Framer</div>
                    <div className={"min-w-[200px] relative flex items-center"}>
                        <Image className={"absolute animate-spin-slow"} src={at_icon} alt="at"/>
                    </div>
                    <div className={"text-[320px] font-black"}>Template</div>
                </div>
            </div>
            <div className={"w-full flex flex-col items-center"}>
                <div className={"max-w-[1200px]"}>
                    <p className={"text-[70px] text-center normal-case"}>We believe that your portfolio should
                        be as unique as your creative vision. That's why we've
                        created a complete and customizable template that makes building your portfolio a
                        breeze.</p>
                </div>
                <div>
                    <a href="#" className={"text-[16px] uppercase"}>More About Us</a>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;
