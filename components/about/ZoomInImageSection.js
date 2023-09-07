import Image from "next/image";

function ZoomInImageSection({images}) {
    return (
        <div className={"flex flex-col w-full h-screen justify-center items-center zoom"}>
            <div
                className={"flex justify-center items-center image-mask w-[20%] h-[20%] rounded-[20px] relative overflow-hidden"}>
                <Image src={images.img1} alt={""}
                       className={"w-[130vw] h-[130vh] object-cover zoom-image object-center"}/>
            </div>
        </div>
    )
}

export default ZoomInImageSection;
