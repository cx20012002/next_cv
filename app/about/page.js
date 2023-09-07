'use client'

import Image from "next/image";
import {profile, people, images} from "@/utils/images";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {horizontalLoop} from "@/utils/infinitySlide";
import AboutHeader from "@/components/about/AboutHeader";
import SliderSection from "@/components/about/SliderSection";
import GetInTouchSection from "@/components/about/GetInTouchSection";
import ZoomInImageSection from "@/components/about/ZoomInImageSection";
import PersonalDetailsSection from "@/components/about/PersonalDetailsSection";

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
            <AboutHeader/>

            {/* Slider */}
            <SliderSection people={people}/>

            {/* Get in Touch Section */}
            <GetInTouchSection images={images}/>

            {/* Zoom in Image Section */}
            <ZoomInImageSection images={images}/>

            {/* Personal Details */}
            <PersonalDetailsSection images={images}/>
        </div>
    )
}

export default About;

