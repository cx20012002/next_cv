import Image from "next/image";
import {profile} from "@/utils/images";

function AboutHeader() {
    return (
        <header className={"flex flex-col justify-center items-center overflow-hidden mb-52"}>
            {/* Header Menu */}
            <div className={"w-[80%] h-24 flex justify-between items-center text-[11px] font-bold leading-3"}>
                <div className={"text-left"}>
                    <p>LOOKING FOR YOUR</p>
                    <p>NEXT DREAM TEMPLATE?</p>
                </div>
                <div className={"text-center"}>
                    <p>CUBO</p>
                    <p>CREATIVE</p>
                </div>
                <div className={"text-right"}>
                    <p>BUILT FOR</p>
                    <p>IMPACT</p>
                </div>
            </div>

            {/* Header Center */}
            <div className={"leading-[210px] text-center mt-28 relative"}>
                {/* Header Center Background Text */}
                <h2 className={"font-black text-[250px] tracking-tight"}>CRAFTING</h2>
                <h2 className={"font-black text-[250px] tracking-tight"}>UNIQUE+BOLD</h2>
                <h2 className={"font-black text-[250px] tracking-tight"}>RODUCTS</h2>

                {/* Header Hero Animated Images */}
                <div className={`w-full h-full max-w-[420px] max-h-[520px] bg-purple-600 absolute left-1/2 
                -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl overflow-hidden drag-box`}>
                    <div className={"h-full w-full relative"}>
                        <div className={"w-full h-full absolute drag-box-item"}>
                            <Image src={profile.profile_7} alt={""} className={"w-full h-full object-cover"}/>
                        </div>
                        <div className={"w-full h-full absolute drag-box-item"}>
                            <Image src={profile.profile_6} alt={""} className={"w-full h-full object-cover"}/>
                        </div>
                        <div className={"w-full h-full absolute drag-box-item"}>
                            <Image src={profile.profile_5} alt={""} className={"w-full h-full object-cover"}/>
                        </div>
                        <div className={"w-full h-full absolute drag-box-item"}>
                            <Image src={profile.profile_10} alt={""} className={"w-full h-full object-cover"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"mt-32 font-bold text-[22px] max-w-[550px] text-center leading-[22px]"}>
                <h3>WE BELIEVE THAT YOUR PORTFOLIO SHOULD BE AS UNIQUE AS YOUR CREATIVE VISION. </h3>
            </div>
        </header>
    )
}

export default AboutHeader;
