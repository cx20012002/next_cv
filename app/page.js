'use client'
import AboutMe from "@/components/home/AboutMe";
import Works from "@/components/home/Works";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";
import Hero from "@/components/home/Hero";

export default function Home() {
    const app = useRef();
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //scroll to top on refresh
        window.scrollTo(0, 0);
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
                    y: -530,
                    duration: 2
                }, "<")

            // Hero Banner Section - Background Animation
            gsap.timeline({repeat: -1, paused: false})
                .fromTo(".bg-anim:first-child", {y: -ul[0].offsetHeight / 2}, {y: 0, duration: 5, ease: 'none'})
                .fromTo(".bg-anim:nth-child(2)", {y: 0}, {y: -ul[0].offsetHeight / 2, duration: 5, ease: 'none'}, "<")

            // Hero Banner Section - Sub Text Animation
            gsap.timeline({repeat: -1, paused: false})
                .to(".sub_text_anim p", {
                    x: -(document.querySelector(".sub_text_anim p").offsetWidth + 8) * 2,
                    duration: 10,
                    ease: 'none'
                })

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
                            start: "+=100 top",
                            end: "bottom top",
                            scrub: 1,
                            // markers: true
                        }
                    })
                })
            })
        }, app)

        ScrollTrigger.refresh();

        return () => {
            ctx.revert();
        }
    }, [])
    return (
        <div className={"relative bg-black font-tasa"} ref={app}>
            <div className={"uppercase text-8xl relative h-fit z-10"}>
                <Hero/>
                <AboutMe/>
                <Works/>
            </div>
        </div>
    )
}
