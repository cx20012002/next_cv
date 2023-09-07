'use client'

import Image from "next/image";
import {profile, people, images} from "@/utils/images";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {horizontalLoop} from "@/utils/infinitySlide";

function About() {
    const app = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(Draggable, ScrollTrigger);
        const ctx = gsap.context(() => {
            // reset scroll position to top
            window.scrollTo(0, 0);

            // Drag Box
            Draggable.create(".drag-box", {
                type: "x,y",
                edgeResistance: 0.65,
                bounds: "header",
                inertia: true,
                onDragEnd: function () {
                    gsap.to(this.target, {
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: "back.out(1)"
                    });
                }
            })

            // Drag Box Items Animation
            const dragBoxItems = gsap.utils.toArray(".drag-box-item").reverse();
            const tl = gsap.timeline({repeat: -1, paused: false});
            dragBoxItems.forEach((item) => {
                tl.to(item, {opacity: 0, delay: 0.5, duration: 0, ease: "none"});
            });

            // Infinity Slider
            const slider = document.querySelector(".slider");
            const slider_items = gsap.utils.toArray(".slider li");

            const loopSlider = horizontalLoop(slider_items, {speed: 1.2, repeat: -1}, gsap);

            slider.onmouseenter = () => {
                loopSlider.timeScale(0.5);
            }

            slider.onmouseleave = () => {
                loopSlider.timeScale(1.5);
            }

            // Zoom in Section
            ScrollTrigger.create({
                trigger: ".zoom",
                start: "top top",
                end: "bottom -=200%",
                scrub: 0.5,
                pin: true,
                // markers: true,
            })

            // Zoom in Image
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.zoom',
                    start: "top 80%",
                    end: "bottom -=200%",
                    scrub: 0.5,
                    // markers: true,
                }
            })
                .to('.image-mask', {
                    ease: "none",
                    width: "95vw",
                    height: "95vh",
                })
                .to('.zoom-image', {
                    ease: "none",
                    width: "100vw",
                    height: "100vh",
                }, "<")

        }, app)

        ScrollTrigger.refresh();

        return () => ctx.revert();

    }, [])

    return (
        <div className={"bg-white relative font-tasa z-10"} ref={app}>
            {/* Header */}
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

            {/* Slider */}
            <div className={"w-full slider overflow-hidden"}>
                <ul className={"flex w-full"}>
                    <li className={"min-w-[528px] w-[528px] h-[800px]  rounded-3xl overflow-hidden"}>
                        <Image src={people.p1} className={"h-full object-cover p-4 rounded-[40px]"} alt={""}/>
                    </li>
                    <li className={"min-w-[528px] w-[528px] h-[800px]  rounded-3xl overflow-hidden"}>
                        <Image src={people.p2} className={"h-full object-cover p-4 rounded-[40px]"} alt={""}/>
                    </li>
                    <li className={"min-w-[528px] w-[528px] h-[800px]  rounded-3xl overflow-hidden"}>
                        <Image src={people.p3} className={"h-full object-cover p-4 rounded-[40px]"} alt={""}/>
                    </li>
                    <li className={"min-w-[528px] w-[528px] h-[800px]  rounded-3xl overflow-hidden"}>
                        <Image src={people.p4} className={"h-full object-cover p-4 rounded-[40px]"} alt={""}/>
                    </li>
                    <li className={"min-w-[528px] w-[528px] h-[800px]  rounded-3xl overflow-hidden"}>
                        <Image src={people.p4} className={"h-full object-cover p-4 rounded-[40px]"} alt={""}/>
                    </li>
                </ul>
            </div>

            {/* Get in Touch Section */}
            <div className={"flex flex-col justify-center items-center -mb-32"}>
                <div className={"max-w-[950px] text-center"}>
                    <div className={"text-[220px] tracking-tight font-black"}>C—B®</div>
                    <p className={"text-[70px] tracking-[-0.03em] leading-[70px] font-tasaDeck font-[700]"}>
                        Express yourself limitlessly with Cubo©—Your portfolio should reflect your lively creative essence.
                    </p>
                </div>
                <button className={"uppercase mt-10 mb-32 group relative text-[16px] font-semibold tracking-wide"}>
                    Get in touch
                    <div className={"w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"}/>
                </button>
                <div className={"max-w-[1100px] w-full"}>
                    <div className={"flex justify-between items-center gap-32 flex-nowrap"}>
                        <div className={"font-bold text-[320px] tracking-tight uppercase leading-[260px]"}>Built</div>
                        <div className={"min-w-[200px] w-[230px] leading-[20px] font-thin"}>Ignite your creative brilliance with Cubo and let your portfolio shine with sheer joy and radiance.</div>
                    </div>
                    <div className={"flex justify-end items-center flex-nowrap gap-5"}>
                        <div className={"min-w-[200px] w-[220px] leading-[20px] animate-spin-slow"}>
                            <Image src={images.smile} alt={""}/>
                        </div>
                        <div className={"font-bold text-[320px] tracking-tight uppercase leading-[260px]"}>FOR</div>
                    </div>
                    <div className={"flex justify-between items-center gap-32 flex-nowrap"}>
                        <div className={"font-bold text-[320px] tracking-tight uppercase leading-[260px] ml-5"}>IMPACT</div>
                    </div>
                </div>
            </div>

            {/* Zoom in Image Section */}
            <div className={"flex flex-col w-full h-screen justify-center items-center zoom"}>
                <div
                    className={"flex justify-center items-center image-mask w-[20%] h-[20%] rounded-[20px] relative overflow-hidden"}>
                    <Image src={images.img1} alt={""}
                           className={"w-[130vw] h-[130vh] object-cover zoom-image object-center"}/>
                </div>
            </div>

            {/* Personal Details */}
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

        </div>
    )
}

export default About;

