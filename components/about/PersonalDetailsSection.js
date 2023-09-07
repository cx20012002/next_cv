import Image from "next/image";

function PersonalDetailsSection({images}) {
    return (
        <div className={"flex justify-center items-center w-full"}>
            <div className={"max-w-[1600px] px-10"}>
                <div className={"lg:text-[110px] text-[55px] lg:leading-[110px] leading-[50px] font-[500] tracking-tight pb-20 py-10"}>
                    <span className={"w-0 h-0 inline-block lg:w-80 lg:h-24"}></span>Cubo© sparks a vibrant sense of creativity with its playful and energetic design elements.
                </div>
                <div className={"h-[1px] w-full bg-neutral-300 my-10"}></div>
                <div className={"grid grid-cols-2 gap-y-20 lg:grid-cols-5 md:grid-cols-3 my-28"}>
                    <div className={"flex justify-center items-center"}><Image src={images.c1} className={"w-28"} alt={"logo"}/></div>
                    <div className={"flex justify-center items-center"}><Image src={images.c2} className={"w-28"} alt={"logo"}/></div>
                    <div className={"flex justify-center items-center"}><Image src={images.c3} className={"w-20"} alt={"logo"}/></div>
                    <div className={"flex justify-center items-center"}><Image src={images.c4} className={"w-28"} alt={"logo"}/></div>
                    <div className={"flex justify-center items-center"}><Image src={images.c5} className={"w-28"} alt={"logo"}/></div>
                    <div className={"flex justify-center items-center"}><Image src={images.c6} className={"w-20"} alt={"logo"}/></div>
                    <div className={"flex justify-center items-center"}><Image src={images.c7} className={"w-28"} alt={"logo"}/></div>
                    <div className={"flex justify-center items-center"}><Image src={images.c8} className={"w-28"} alt={"logo"}/></div>
                    <div className={"flex justify-center items-center"}><Image src={images.c9} className={"w-28"} alt={"logo"}/></div>
                    <div className={"flex justify-center items-center"}><Image src={images.c10} className={"w-28"} alt={"logo"}/></div>
                </div>
                <div className={"h-[1px] w-full bg-neutral-300 my-10"}></div>
                <div className={"flex items-start text-[30px] leading-[45px] font-tasaText text-neutral-600 tracking-tight"}>
                    <div className={"w-5/12 flex items-center"}><span className={"w-2 h-2 bg-neutral-600 inline-block rounded-full"}></span>&nbsp; Our Culture</div>
                    <div className={"w-7/12 space-y-10"}>
                        <p>Our Culture section is a vibrant window into the heart and soul of our creative community, showcasing the values of collaboration, inclusivity, and continuous growth that define our dynamic team.</p>
                        <p>Our Culture section is a vibrant window into the heart and soul of our creative community, showcasing the values of collaboration, inclusivity, and continuous growth that define our dynamic team.</p>
                    </div>
                </div>
                <div className={"h-[1px] w-full bg-neutral-300 my-10"}></div>
                <div className={"flex items-start text-[30px] leading-[45px] font-tasaText text-neutral-600 tracking-tight"}>
                    <div className={"w-5/12 flex items-center"}><span className={"w-2 h-2 bg-neutral-600 inline-block rounded-full"}></span>&nbsp; Services</div>
                    <div className={"w-7/12 space-y-10"}>
                        <div className={"w-full flex"}>
                            <ul className={"w-1/2"}>
                                <li>Art Direction</li>
                                <li>Brand Identity</li>
                                <li>Product Design</li>
                                <li>UX Design</li>
                            </ul>
                            <ul className={"w-1/2"}>
                                <li>Art Direction</li>
                                <li>Web Design</li>
                                <li>App Design</li>
                                <li>Design Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"h-[1px] w-full bg-neutral-300 my-10"}></div>
                <div className={"flex items-start text-[30px] leading-[45px] font-tasaText text-neutral-600 tracking-tight"}>
                    <div className={"w-5/12 flex items-center"}><span className={"w-2 h-2 bg-neutral-600 inline-block rounded-full"}></span>&nbsp; Clients</div>
                    <div className={"w-7/12 space-y-10"}>
                        <div className={"w-full flex"}>
                            <ul className={"w-1/2 leading-[45px]"}>
                                <li>Nike</li>
                                <li>Google</li>
                                <li>Netflix</li>
                                <li>Amazon</li>
                            </ul>
                            <ul className={"w-1/2 leading-[45px]"}>
                                <li>Adidas</li>
                                <li>Disney</li>
                                <li>Under Armour</li>
                                <li>Nvidia</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"h-[1px] w-full bg-neutral-300 mt-10"}></div>
                <div className={"flex items-center justify-center text-[55px] font-tasaText tracking-tight text-center font-bold py-28"}>
                    <div className={"max-w-[1050px] leading-[60px] flex flex-col items-center"}>
                        <div className={"w-14 mb-12"}><Image src={images.quote_icon} alt={"quote"}/></div>
                        <p className={"mb-10"}>
                            With Cubo, my portfolio stands out from the crowd, captivating visitors and leaving a
                            lasting impression. I couldn't be happier with the results. Thank you, Cubo, for elevating
                            my creative journey to new heights.
                        </p>
                        <div className={"flex items-center text-left text-xl gap-5 tracking-normal"}>
                            <div className={"w-20 rounded-full overflow-hidden"}>
                                <Image src={images.avatar1} alt={"avatar"}/>
                            </div>
                            <div className={"leading-tight"}>
                                <h2 className={"text-neutral-600"}>Peter Mcneeley</h2>
                                <h2 className={"text-neutral-400"}>Creative Director</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default PersonalDetailsSection;
