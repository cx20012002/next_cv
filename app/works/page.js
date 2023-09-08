'use client'

import Image from "next/image";
import {profile} from "@/utils/images";
import Link from "next/link";
import Header from "@/components/Header";

function Works() {
    return (
        <div className={"w-full flex flex-col items-center h-fit bg-white relative font-tasa z-10"}>
            <Header/>
            <div className={"w-full flex flex-col items-center gap-y-7 pb-28 px-5"}>
                <div className={"w-full flex justify-center font-black text-9xl py-20"}>
                    <h1 className={"text-[220px] tracking-tight"}>WORKS</h1>
                </div>
                <div className={"max-w-[1580px] w-full justify-center"}>
                    <div className={"space-y-32"}>
                        <Link href={"/works/bored"} as={"/works/bored"} className={"flex justify-center gap-16 group"}>
                            <div className={"w-[72%] min-h-[800px] relative"}>
                                <Image src={profile.profile_1} alt={""}
                                       className={"rounded-2xl h-full absolute top-0 z-20 group-hover:block hidden object-cover"}/>
                                <Image src={profile.profile_2} alt={""}
                                       className={"rounded-2xl h-full absolute top-0 z-10 object-cover"}/>
                            </div>
                            <div className={"w-[28%] flex flex-col justify-center gap-5"}>
                                <div>
                                    <h2 className={"uppercase font-bold text-xl"}>Bored</h2>
                                    <span className={"text-neutral-500"}>Internet 2023</span>
                                </div>
                                <p className={"text-neutral-500"}>Bored is a dynamic and captivating branding and
                                    website
                                    project designed to inject excitement and vibrancy into the mundane. </p>
                            </div>
                        </Link>
                        <Link href={"/"} as={"/"} className={"flex justify-center gap-16 group"}>
                            <div className={"w-[72%] min-h-[800px] relative"}>
                                <Image src={profile.profile_3} alt={""}
                                       className={"rounded-2xl h-full absolute top-0 z-20 group-hover:block hidden object-cover"}/>
                                <Image src={profile.profile_4} alt={""}
                                       className={"rounded-2xl h-full absolute top-0 z-10 object-cover"}/>
                            </div>
                            <div className={"w-[28%] flex flex-col justify-center gap-5"}>
                                <div>
                                    <h2 className={"uppercase font-bold text-xl"}>OHMS</h2>
                                    <span className={"text-neutral-500"}>Internet 2022</span>
                                </div>
                                <p className={"text-neutral-500"}>Ohms is a captivating branding and website project
                                    designed specifically for digital creators. This innovative endeavor embodies the
                                    essence of digital artistry and empowers creators to establish a distinctive online
                                    presence.</p>
                            </div>
                        </Link>
                        <Link href={"/"} as={"/"} className={"flex justify-center gap-16 group"}>
                            <div className={"w-[72%] min-h-[800px] relative"}>
                                <Image src={profile.profile_5} alt={""}
                                       className={"rounded-2xl h-full absolute top-0 z-20 group-hover:block hidden object-cover"}/>
                                <Image src={profile.profile_6} alt={""}
                                       className={"rounded-2xl h-full absolute top-0 z-10 object-cover"}/>
                            </div>
                            <div className={"w-[28%] flex flex-col justify-center gap-5"}>
                                <div>
                                    <h2 className={"uppercase font-bold text-xl"}>Minerva</h2>
                                    <span className={"text-neutral-500"}>Startup 2023</span>
                                </div>
                                <p className={"text-neutral-500"}>Minerva is an exceptional branding and website project
                                    that embodies elegance, sophistication, and intellect. Crafted with meticulous
                                    attention
                                    to detail, Minerva is tailored for forward-thinking individuals and businesses
                                    seeking
                                    to make a profound impact in their industry.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;
