import { LinkItem } from "@/Element/Link/Link"
import { useState } from "react"
import { MdHome, MdMessage, MdOutlineDoubleArrow, MdPeople, MdVideoCall } from "react-icons/md"

const AsideNavLinks = [
    {
        label:"Home",
        icon: <MdHome  size="25"/>,
        to:"/user/",
    },
    {
        label:"Messages",
        icon: <MdMessage size="25"/>,
        to:"/user/message"
    },
    {
        label:"Friends",
        icon: <MdPeople size="25"/>,
        to:"/user/friends"
    },
    {
        label:" Chat Video",
        icon: <MdVideoCall size="25"/>,
        to:"/user/video-call"
    }
]

export const AsideNav = () => {
    const [isNavSlided, setIsNavSlided] = useState<boolean>(false);
    const toggleSlideNav = () => {
         setIsNavSlided(!isNavSlided)
    }
  return (
    <div className={`${isNavSlided ?  'w-auto': 'w-[18rem]'} transition-all duration-300`}>
         <div className={`flex  mb-3 ${isNavSlided ?'justify-center' :'justify-end'}`}>
              <span 
                    onClick={toggleSlideNav}
                   className=" cursor-pointer p-2 rounded-full bg-[#01010111]">
                   <MdOutlineDoubleArrow />
              </span>
         </div>
         <ul className="flex flex-col gap-2">
             {
                AsideNavLinks.map((link , index) => {
                    return (
                         <LinkItem key={index} label={link.label} icon={link.icon} to={link.to} toSlide={isNavSlided} />
                    )
                })
             }
         </ul>

    </div>
  )
}
