import Image from "next/image";
import logo from "/public/images/logo.svg";
import Link from "next/link";

function Nav() {
    return (
        <div className={"w-full h-28 fixed bottom-0 z-20 flex justify-center items-center"}>
            <div
                className={"flex w-fit h-[70%] bg-[rgba(0,0,0,0.65)] backdrop-blur-lg justify-center items-center px-10 rounded-xl"}>
                <ul className={"flex items-center gap-4 text-white font-tasa font-[300] text-[16px]"}>
                    <li>
                        <Link href={"/"}>
                            <Image src={logo} alt={"logo"} className={"w-14"}/>
                        </Link>
                    </li>
                    <li><Link href={"/about"} className={"hover:bg-neutral-700 hover:bg-opacity-50  duration-300  w-16 h-8 flex items-center justify-center rounded"}>About</Link></li>
                    <li><Link href={"/works"} className={"hover:bg-neutral-700 hover:bg-opacity-50  duration-300  w-16 h-8 flex items-center justify-center rounded"}>Works</Link></li>
                    <li><Link href={"/contact"} className={"hover:bg-neutral-700 hover:bg-opacity-50  duration-300  w-16 h-8 flex items-center justify-center rounded"}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
