"use client"
import { Sheet ,SheetContent,SheetTrigger} from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"
const links=[
    {
        name:"home",
        path:"/"
    },
    {
        name:"services",
        path:"/services"
    },
    {
        name:"resume",
        path:"/resume"
    },
    {
        name:"work",
        path:"/work"
    },
    {
        name:"contact",
        path:"/contact"
    }
]
const MobileNav = () => {
    const Pathname=usePathname()
  return (
    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
    <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl"><Link href={"/"}><h1>Haithem</h1></Link></div>
        <nav className="flex flex-col justify-center items-center gap-8">
        {links.map((link,index)=>{
            return (
                <Link href={link.path} key={index} className={`${link.path===Pathname&&"text-accent border-b-2 border-accent"}capitalize text-xl hover:text-accent transition-all`}>
                {link.name}
                </Link>
            )
        })}
        </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav