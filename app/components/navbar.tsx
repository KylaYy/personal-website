"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();

    const links = [
        {href: "/blog", name: "Blog"}, 
        {href: "/projects", name: "Projects"}, 
        {href: "/contact", name:"Contact"}
    ]

    return (
        <div className="flex flex-row justify-between py-10 text-xl text-hlink">
            <div className="flex flex-row">
                <Link href="/home" className="text-2xl">Kyla Yu</Link>
            </div>
            <div className="flex flex-row space-x-5">
                {links.map((link) => {
                    const shouldActivate = link.href === pathname; 
                    return (
                    <Link key={link.name} href={link.href} className={shouldActivate ? "text-active" : "text-hlink"}>{link.name}</Link>
                    );
                })}
                <Link href="" rel="noopener noreferrer">Resume</Link>
            </div>
        </div>
    );
}; 

export default NavBar;