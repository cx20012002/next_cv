'use client'

import {useLayoutEffect} from "react";
import {gsap} from 'gsap';
import Link from "next/link";
import AnimatedButton from "@/components/AnimatedButton";

function Footer() {
    useLayoutEffect(() => {
        // Footer Section
        const ctx = gsap.context(() => {
            gsap.timeline({
                repeat: -1,
                paused: false,
            })
                .to(".footer-text-anim", {
                    y: document.querySelector(".footer-text-anim .anim").offsetHeight,
                    duration: 2,
                    ease: 'none'
                });
        })

        return () => ctx.revert();
    }, [])
    return (
        <div className={"w-full h-screen flex justify-center items-center font-tasa bg-black"}>
            <div className={"w-full h-screen flex justify-center items-center flex-col fixed top-0"}>
                <div className={"w-full h-72 flex flex-col justify-center items-center overflow-hidden"}>
                    <div className={"footer-text-anim flex flex-col text-[#FFF1E0]"}>
                        {["item1", "item2", "item3", "item4"].map(item => (
                            <div className={"text-[300px] leading-[220px] flex items-start anim"} key={item}>
                                <span className={"font-black"}>CUBO</span>
                                <span className={"text-8xl align-super inline-block"}>®</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Link as={"/contact"} href={"/contact"}>
                    <AnimatedButton text={"Start a Project"}/>
                </Link>
                <div className={"text-neutral-500 text-sm uppercase mt-20 text-center"}>
                    <ul className={"flex gap-10"}>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>Behance</li>
                        <li>Dribbble</li>
                    </ul>
                    <p className={"text-[10px] mt-10 font-tasaDeck"}>@2023 all rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
