import Image from "next/image";

function GetInTouchSection({images}) {
    return (
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
    )
}

export default GetInTouchSection;
