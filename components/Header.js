import Link from "next/link";

function Header() {
    return (
        <div className={"max-w-[1580px] w-full h-24 flex justify-between items-center text-[10px] font-tasaDeck font-[600] leading-3 px-5"}>
            <div className={"text-left"}>
                <p>LOOKING FOR YOUR</p>
                <p>NEXT DREAM TEMPLATE?</p>
            </div>
            <Link href={"/"} as={"/"} className={"text-center"}>
                <p>CUBO</p>
                <p>CREATIVE</p>
            </Link>
            <div className={"text-right"}>
                <p>BUILT FOR</p>
                <p>IMPACT</p>
            </div>
        </div>
    )
}

export default Header;
