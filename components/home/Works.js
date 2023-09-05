import Image from "next/image";
import smile_icon from "@/public/images/smile_icon.svg";
import {
    profile
} from "@/utils/images";

function Works() {
    const card_style = "card w-[80vw] h-[80vh] rounded-xl sticky top-[100px] !rounded-[32px] overflow-hidden";

    return (
        <div className={"works w-full h-full relative flex flex-col justify-center items-center bg-[#e8e8e8] pb-20"}>
            <div className={"works-container w-full relative justify-center items-center flex flex-col mb-32"}>
                <div className={"flex justify-center items-center text-[10rem] w-full h-screen sticky top-0 -mb-32"}>
                    <div className={"absolute top-0 w-[80%] h-24 flex justify-between items-center text-[11px] font-bold leading-3 text-neutral-500"}>
                        <div className={"text-left"}>
                            <p>Website • digital</p>
                        </div>
                        <div className={"text-center"}>
                            <Image className={"w-5"} src={smile_icon} alt={"smile"}/>
                        </div>
                        <div className={"text-right"}>
                            <p>Bored</p>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-y-4"}>
                        <h2 className={"text-6xl font-black"}>Bored</h2>
                        <p className={"text-[12px] font-thin text-center text-neutral-500 font-tasaDeck flex gap-3 justify-center"}><span>2023</span> Website • digital</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-52 mt-[80vh]"}>
                    <div className={card_style}>
                        <Image src={profile.profile_1} alt={"work profile"} className={"object-cover h-full"} />
                    </div>
                    <div className={card_style}>
                        <Image src={profile.profile_2} alt={"work profile"} className={"object-cover h-full"}  />
                    </div>
                    <div className={card_style}>
                        <Image src={profile.profile_3} alt={"work profile"} className={"object-cover h-full"}  />
                    </div>
                </div>
            </div>

            <div className={"works-container w-full relative justify-center items-center flex flex-col mb-32"}>
                <div className={"flex justify-center items-center text-[10rem] w-full h-screen sticky top-0 -mb-32"}>
                    <div className={"absolute top-0 w-[80%] h-24 flex justify-between items-center text-[11px] font-bold leading-3"}>
                        <div className={"text-left"}>
                            <p>Website • digital</p>
                        </div>
                        <div className={"text-center"}>
                            <Image className={"w-5"} src={smile_icon} alt={"smile"}/>
                        </div>
                        <div className={"text-right"}>
                            <p>OHMS</p>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-y-4"}>
                        <h2 className={"text-6xl font-black"}>OHMS</h2>
                        <p className={"text-[12px] font-thin text-center text-neutral-500 font-tasaDeck flex gap-3 justify-center"}><span>2022</span> Website • digital</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-52 mt-[80vh]"}>
                    <div className={card_style}>
                        <Image src={profile.profile_4} alt={"work profile"} className={"object-cover h-full"} />
                    </div>
                    <div className={card_style}>
                        <Image src={profile.profile_5} alt={"work profile"} className={"object-cover h-full"} />
                    </div>
                    <div className={card_style}>
                        <Image src={profile.profile_6} alt={"work profile"} className={"object-cover h-full"} />
                    </div>
                </div>
            </div>

            <div className={"works-container w-full relative justify-center items-center flex flex-col"}>
                <div className={"flex justify-center items-center text-[10rem] w-full h-screen sticky top-0 -mb-32"}>
                    <div className={"absolute top-0 w-[80%] h-24 flex justify-between items-center text-[11px] font-bold leading-3"}>
                        <div className={"text-left"}>
                            <p>Website • digital</p>
                        </div>
                        <div className={"text-center"}>
                            <Image className={"w-5"} src={smile_icon} alt={"smile"}/>
                        </div>
                        <div className={"text-right"}>
                            <p>Minerva</p>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-y-4"}>
                        <h2 className={"text-6xl font-black"}>Minerva</h2>
                        <p className={"text-[12px] font-thin text-center text-neutral-500 font-tasaDeck flex gap-3 justify-center"}><span>2023</span> Website • digital</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-52 mt-[80vh]"}>
                    <div className={card_style}>
                        <Image src={profile.profile_7} alt={"work profile"} className={"object-cover h-full"} />
                    </div>
                    <div className={card_style}>
                        <Image src={profile.profile_8} alt={"work profile"} className={"object-cover h-full"} />
                    </div>
                    <div className={card_style}>
                        <Image src={profile.profile_9} alt={"work profile"} className={"object-cover h-full"} />
                    </div>
                </div>
                <button className={"text-[20px] px-16 py-8 border border-neutral-400 rounded-full uppercase mt-10 z-20"}>View all works</button>
            </div>
        </div>
    )
}

export default Works;
