function Hero() {
    return (
        <div className={"w-full h-[500vh] sticky top-0 header_section"}>
            {/* Background Animation */}
            <div className={"absolute top-0 w-full h-screen flex justify-center items-center bg-black"}>
                <div
                    className={"w-full h-[800px] -tracking-[12.8px] text-[320px] text-white font-black font-tasaText flex justify-center gap-3 overflow-hidden"}>
                    {['item1', 'item2'].map(item => (
                        <div className={"bg-anim w-full flex flex-col justify-center items-center whitespace-nowrap"} key={item}>
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
                    ))}

                </div>
            </div>
            {/* Banner Animation */}
            <header className={"w-full h-screen bg-[#e8e8e8] sticky top-0 flex items-center justify-center"}>
                <div className={"flex flex-col items-center justify-center w-full h-screen relative"}>
                    <div
                        className={"absolute top-0 w-[80%] h-24 flex justify-between items-center text-[11px] font-bold leading-3"}>
                        <div className={"text-left"}>
                            <p>LOOKING FOR YOUR !!</p>
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
                    <div
                        className={"w-full h-[256px] overflow-hidden font-tasa text-center font-[900] leading-[256px] tracking-[-12.8px]"}>
                        <h2 className={"font-black text-[320px]"}>CUBO</h2>
                        <h2 className={"font-black text-[320px]"}>DESIGN</h2>
                        <h2 className={"font-black text-[320px]"}>AGENCY</h2>
                    </div>
                    <div
                        className={"text-[32px] flex justify-between items-center md:w-[45%] w-full mt-10 whitespace-nowrap"}>
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
    );
}

export default Hero;
