'use client'

import {useLayoutEffect, useRef} from "react";
import Image from "next/image";
import {works, profile} from "@/utils/images";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Header from "@/components/Header";

function Bored() {
    const app = useRef();
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.to('.bored_image', {
                scrollTrigger: {
                    trigger: '.bored_image_wrap',
                    start: 'top top',
                    end: '120% 50%+100px',
                    scrub: 0.5,
                    // markers: true,
                },
               scale: 1.1,
            })

            const profile_images = gsap.utils.toArray(".profile_image");
            profile_images.forEach((item) => {
                gsap.fromTo(item, {
                    y: 100,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 50%',
                        end: 'bottom 20%',
                        toggleActions: `play reverse restart reverse`,
                    }
                })
            })
        }, app)


        return () => ctx.revert();

    }, [])

    return (
        <div className={"w-full h-fit bg-white relative font-tasa z-10"} ref={app}>
            <div className={"flex flex-col justify-center items-center"}>
                <Header/>

                <div className={"max-w-[1580px] w-full flex flex-col gap-y-7 pt-48 pb-28 px-5"}>
                    <h2 className={"text-6xl uppercase font-black"}>Bored</h2>
                    <h3 className={"text-3xl text-neutral-600 w-[50%]"}>Bored is a dynamic and captivating branding and
                        website project designed to inject excitement and vibrancy into the mundane.</h3>
                    <ul className={"flex gap-10 text-base"}>
                        <li>
                            <div>Year</div>
                            <div className={"font-[100] text-neutral-600"}>2023</div>
                        </li>
                        <li>
                            <div>Industry</div>
                            <div className={"font-[100] text-neutral-600"}>Internet</div>
                        </li>
                        <li>
                            <div>Type</div>
                            <div className={"font-[100] text-neutral-600"}>2023</div>
                        </li>
                    </ul>
                    <button className={"text-left"}>View Project</button>
                </div>
            </div>

            <div className={`w-full h-screen flex justify-center items-center sticky top-0 -z-10 overflow-hidden bored_image_wrap`}>
                <Image src={works.bored_image} fill alt={"bored image"} className={"bored_image object-cover"}/>
            </div>
            <div className={"w-full bg-white flex flex-col justify-center items-center"}>
                <div className={"max-w-[1680px] space-y-20 pt-20 px-10"}>
                    <Image src={profile.profile_2} alt={""} className={"profile_image"}/>
                    <Image src={profile.profile_11} alt={""} className={"profile_image"}/>
                    <Image src={profile.profile_12} alt={""} className={"profile_image"}/>
                    <Image src={profile.profile_13} alt={""} className={"profile_image"}/>
                </div>
                <div className={"w-full min-h-[700px] flex flex-col justify-center items-center"}>
                    <div className={"group relative w-[400px] h-[400px] flex flex-col justify-center items-center"}>
                        <div className={"text-neutral-500 text-xl uppercase font-bold"}>Next</div>
                        <h2 className={"text-[80px] font-bold"}>OHMS</h2>
                        <Link href={"/"} as={"/"} className={"w-[500px] h-[500px] hidden rounded-3xl absolute group-hover:block overflow-hidden"}>
                            <Image src={profile.profile_4} alt={""} className={"w-full h-full object-cover"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bored;
