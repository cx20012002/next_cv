import Image from "next/image";
import logo from "/public/images/logo.svg";
function Nav() {
    return (
        <div className={"w-full h-28 fixed bottom-0 z-20 flex justify-center items-center"}>
           <div className={"flex w-fit h-[70%] bg-[rgba(0,0,0,0.65)] backdrop-blur-lg justify-center items-center px-10 rounded-xl"}>
               <ul className={"flex items-center gap-8 text-white font-tasa font-[300] text-[16px]"}>
                   <li>
                       <Image src={logo} alt={"logo"} className={"w-14"}/>
                   </li>
                   <li>About</li>
                   <li>Works</li>
                   <li>Contact</li>
               </ul>
           </div>
        </div>
    )
}

export default Nav;