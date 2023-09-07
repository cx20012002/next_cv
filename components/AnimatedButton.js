function AnimatedButton({text}) {
    return (
        <div className={"text-[20px] text-white px-16 py-8 border border-neutral-700 rounded-full uppercase mt-20 group hover:border-neutral-600 duration-300"}>
            <div className={"flex flex-col h-7 overflow-hidden"}>
                <div className={"flex flex-col group-hover:-translate-y-[30px] duration-500 ease-in-out"}>
                    <span>{text}</span>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    )
}

export default AnimatedButton;
