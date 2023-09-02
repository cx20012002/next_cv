'use client'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useLayoutEffect, useRef} from "react";
import {profile_1, profile_2, profile_3} from '@/utils/images'
import Image from "next/image";


const card_style = "card w-[80vw] h-[80vh] rounded-xl sticky top-0 rounded-[30px] overflow-hidden";

function Hero() {
    const app = useRef();
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {

            const ul = document.querySelectorAll('.bg-anim ul');
            // Hero Banner Section
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".header_section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.5,
                    // markers: true
                }
            })
                .to("header", {
                    scale: 0.5,
                    duration: 2,
                    ease: 'none'
                })
                .to("header h2", {
                    y: -500,
                    duration: 2
                }, "<")


            // Hero Banner Section - Background Animation
            gsap.timeline({repeat: -1, paused: false})
                .fromTo(".bg-anim:first-child", {y: -ul[0].offsetHeight / 2 }, {y: 0, duration:5, ease: 'none'})
                .fromTo(".bg-anim:nth-child(2)", {y: 0}, {y: -ul[0].offsetHeight / 2, duration:5, ease: 'none'}, "<")


            gsap.timeline({repeat: -1, paused: false})
                .to(".sub_text_anim p", {x: -(document.querySelector(".sub_text_anim p").offsetWidth + 8) * 2, duration: 10, ease: 'none'})

            // About Me Section
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-me",
                    start: "-=50% top",
                    end: "bottom top",
                    scrub: 0.5,
                    // markers: true
                }
            })
                .fromTo(".about-me .anim-text:first-child", {x: '-50%'}, {x: '50%'})
                .fromTo(".about-me .anim-text:nth-child(2)", {x: '100%'}, {x: '-20%'}, "<")

            // Works Section
            const work_containers = gsap.utils.toArray(".works-container");
            work_containers.forEach((container) => {
                const work_cards = container.querySelectorAll(".card");
                work_cards.forEach((card, cardIndex) => {
                    const isLastCard = cardIndex === work_cards.length - 1;

                    gsap.to(card, {
                        scale: isLastCard ? 1 : 0.5,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: "-=100 top",
                            end: "bottom top",
                            scrub: 0.1,
                            // markers: true
                        }
                    })
                })
            })

        }, app)

        return () => ctx.revert();
    }, [])

    return (
        <div className={"relative bg-black font-tasa"}>
            {/* Main Section */}
            <div className={"uppercase text-8xl relative h-fit z-10"} ref={app}>
                {/* Hero Banner Section */}
                <div className={"w-full h-[500vh] sticky top-0 header_section"}>
                    {/* Background Animation */}
                    <div className={"absolute top-0 w-full h-screen flex justify-center items-center"}>
                        <div className={"w-full h-[800px] -tracking-[12.8px] text-[320px] text-white font-black font-tasaText flex justify-center gap-3 overflow-hidden"}>
                            <div className={"bg-anim w-full flex flex-col justify-center items-center whitespace-nowrap"}>
                                <ul className={"leading-[250px]"}>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                </ul>
                                <ul className={"leading-[250px]"}>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                </ul>
                            </div>
                            <div className={"bg-anim w-full flex flex-col justify-center items-center whitespace-nowrap"}>
                                <ul className={"leading-[250px]"}>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                </ul>
                                <ul className={"leading-[250px]"}>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                    <li>CUBO</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Banner Animation */}
                    <header className={"w-full h-screen bg-[#e8e8e8] sticky top-0 flex items-center justify-center"}>
                        <div className={"flex flex-col items-center justify-center w-full h-screen relative"}>
                            <div className={"absolute top-0 w-[80%] h-24 flex justify-between items-center text-[11px] font-bold leading-3"}>
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
                            <div className={"w-full h-[256px] overflow-hidden font-tasa text-center font-[900] leading-[256px] tracking-[-12.8px]"}>
                                <h2 className={"font-black text-[320px]"}>CUBO</h2>
                                <h2 className={"font-black text-[320px]"}>DESIGN</h2>
                                <h2 className={"font-black text-[320px]"}>AGENCY</h2>
                            </div>
                            <div className={"text-[32px] flex justify-between items-center md:w-[45%] w-full mt-10 whitespace-nowrap"}>
                                <div className={"w-3/12"}>C—B</div>
                                <div className={"w-6/12 text-[12px] text-center"}>
                                    <div className={"sub_text_anim flex gap-2 overflow-hidden"}>
                                        <p className={"px-1"}>framer design • creative template •</p>
                                        <p className={"px-1"}>framer design • creative template •</p>
                                        <p className={"px-1"}>framer design • creative template •</p>
                                        <p className={"px-1"}>framer design • creative template •</p>
                                    </div>
                                </div>
                                <div className={"w-3/12 text-right"}>(2023)</div>
                            </div>
                        </div>
                    </header>
                </div>

                {/* About Me Section */}
                <div className={"w-full relative flex flex-col overflow-hidden py-56 gap-y-60 bg-white about-me"}>
                    <div>
                        <div className={"flex items-center justify-center anim-text"}>
                            <div className={"text-[320px] font-black"}>About</div>
                            <div className={"min-w-[200px] relative flex items-center"}>
                                <img className={"absolute animate-spin-slow"} src="/images/smile_icon.svg" alt="smile"/>
                            </div>
                            <div className={"text-[320px] font-black"}>Cubo</div>
                        </div>
                        <div className={"flex items-center justify-center anim-text"}>
                            <div className={"text-[320px] font-black"}>Framer</div>
                            <div className={"min-w-[200px] relative flex items-center"}>
                                <img className={"absolute animate-spin-slow"} src="/images/at-icon.svg" alt="at"/>
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

                {/* Works Section */}
                <div className={"works w-full h-full relative flex flex-col justify-center items-center bg-[#e8e8e8] pb-20"}>
                    <div className={"works-container w-full relative justify-center items-center flex flex-col"}>
                        <div className={"flex justify-center items-center text-[10rem] w-full h-screen sticky top-0"}>
                            <div className={"absolute top-0 w-[80%] h-24 flex justify-between items-center text-[11px] font-bold leading-3"}>
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
                            <div className={"flex flex-col gap-y-4"}>
                                <h2 className={"text-6xl font-black"}>Bored</h2>
                                <p className={"text-[12px] font-thin text-center text-neutral-500"}>2023 Website-digital</p>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-52 mt-[80vh]"}>
                            <div className={card_style}>
                                <Image src={profile_1} alt={"work profile"} fill />
                            </div>
                            <div className={card_style}>
                                <Image src={profile_2} alt={"work profile"} fill />
                            </div>
                            <div className={card_style}>
                                <Image src={profile_3} alt={"work profile"} fill />
                            </div>
                        </div>
                    </div>

                    <div className={"works-container w-full relative justify-center items-center flex flex-col"}>
                        <div className={"flex justify-center items-center text-[10rem] w-full h-screen sticky top-0"}>adsfasdf</div>
                        <div className={"flex flex-col gap-52 mt-[80vh]"}>
                            <div className={card_style}>
                                <Image src={profile_1} alt={"work profile"} fill />
                            </div>
                            <div className={card_style}>
                                <Image src={profile_2} alt={"work profile"} fill />
                            </div>
                            <div className={card_style}>
                                <Image src={profile_3} alt={"work profile"} fill />
                            </div>
                        </div>
                    </div>

                    <div className={"works-container w-full relative justify-center items-center flex flex-col"}>
                        <div className={"flex justify-center items-center text-[10rem] w-full h-screen sticky top-0"}>adsfasdf</div>
                        <div className={"flex flex-col gap-52 mt-[80vh]"}>
                            <div className={card_style}>
                                <Image src={profile_1} alt={"work profile"} fill />
                            </div>
                            <div className={card_style}>
                                <Image src={profile_2} alt={"work profile"} fill />
                            </div>
                            <div className={card_style}>
                                <Image src={profile_3} alt={"work profile"} fill />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Contact Section */}
            <div className={"w-full h-screen flex justify-center items-center"}>
                <div className={"w-full h-screen flex justify-center items-center flex-col fixed top-0"}>
                    <h2>Contact</h2>
                    <button className={"py-4 px-6 bg-green-200"}>Click Me</button>
                </div>
            </div>

        </div>
    );
}

export default Hero;
