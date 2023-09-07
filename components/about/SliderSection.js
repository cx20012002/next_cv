import Image from "next/image";

function SliderSection({people}) {
    return (
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
    )
}

export default SliderSection;
