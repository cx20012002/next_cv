'use client'

import {useLayoutEffect, useRef} from "react";
import {images} from "@/utils/images";
import Image from "next/image";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import Header from "@/components/Header";

function Contact() {
    const app = useRef();
    gsap.registerPlugin(Draggable);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            Draggable.create(".drag-box", {
                type: "x,y",
                edgeResistance: 0.65,
                bounds: app.current,
                inertia: true,
                onDragEnd: function () {
                    gsap.to(this.target, {
                        x: 0,
                        y: 0,
                        duration: 1.5,
                        ease: "elastic.out(2)"
                    });
                }
            })
        }, app)

        return () => ctx.revert();

    }, [])

    return (
        <div className={"w-full h-fit flex flex-col items-center bg-white relative font-tasa z-10 overflow-hidden"}
             ref={app}>
            <Header/>
            <div className={"max-w-[1580px] w-full flex flex-col items-center gap-y-7 pb-28 px-5"}>
                <div className={"w-full flex flex-col justify-center items-center font-black text-9xl pt-20 pb-5"}>
                    <h1 className={"text-[220px] tracking-tight uppercase"}>Contact</h1>
                    <div className={"text-[37px] font-normal font-tasaText tracking-tight"}>Let’s get to know each
                        other. We'd love to hear from you.
                    </div>
                </div>
                <div className={"w-full flex justify-center items-center relative"}>
                    <div className={"w-[230px] h-[230px] bg-[#9ff] rounded-full flex justify-center items-center cursor-pointer drag-box"}>
                        <Image src={images.smile_contact} alt={"smile_contact"} className={"w-[52%] animate-spin-very-slow select-none"}/>
                    </div>
                </div>
                <div className={"w-full flex flex-col justify-center text-[30px] font-tasaText tracking-tight mt-20"}>
                    <div className={"flex justify-center"}>
                        <div className={"w-[30%]"}>Connect</div>
                        <div className={"w-[70%] space-y-10"}>
                            <div>
                                <h2>Inquiries & commissions</h2>
                                <div className={"text-neutral-600 w-fit group"}>
                                    <a href="#" className={""}>
                                        <span>hello@cubo.cc</span>
                                        <div className={"h-[1px] bg-black w-full duration-300 transform origin-right group-hover:scale-x-0"}></div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h2>Job applications</h2>
                                <div className={"text-neutral-600 w-fit group"}>
                                    <a href="#" className={""}>
                                        <span>jobs@cubo.cc</span>
                                        <div className={"h-[1px] bg-black w-full duration-300 transform origin-right group-hover:scale-x-0"}></div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h2>General contact</h2>
                                <div className={"text-neutral-600 w-fit group"}>
                                    <a href="#" className={""}>
                                        <span>contact@cubo.cc</span>
                                        <div className={"h-[1px] bg-black w-full duration-300 transform origin-right group-hover:scale-x-0"}></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full h-[1px] bg-neutral-300 my-16"}></div>
                    <div className={"flex justify-center"}>
                        <div className={"w-[30%]"}>Social</div>
                        <div className={"w-[70%] space-y-10"}>
                            <div className={"flex flex-col space-y-5"}>
                                <div className={"text-neutral-600 w-fit group"}>
                                    <a href="#" className={""}>
                                        <span>Instagram</span>
                                        <div className={"h-[1px] bg-black w-full duration-300 transform origin-right group-hover:scale-x-0"}></div>
                                    </a>
                                </div>
                                <div className={"text-neutral-600 w-fit group"}>
                                    <a href="#" className={""}>
                                        <span>Linkedin</span>
                                        <div className={"h-[1px] bg-black w-full duration-300 transform origin-right group-hover:scale-x-0"}></div>
                                    </a>
                                </div>
                                <div className={"text-neutral-600 w-fit group"}>
                                    <a href="#" className={""}>
                                        <span>Behance</span>
                                        <div className={"h-[1px] bg-black w-full duration-300 transform origin-right group-hover:scale-x-0"}></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;
