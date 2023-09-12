import { Avatar } from "@/Element/Avatar/Avatar"
import  { useState } from "react"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import { DropDown } from "../DropDown/DropDown"


type ProfileInfoProps = {
    avatar: string,
    username:string,    
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    const [isVisible, setIsVisible ] = useState<boolean>(false)
    const toggleIsVisible = () => {
         setIsVisible(!isVisible)
    }
  return (
  <div className="relative">
      <button 
         onClick={toggleIsVisible}
         className='flex items-center gap-2'>
          <span>
              <Avatar imageSrc={props.avatar} size={3} />
          </span>
          <span>{props.username}</span>
          <span>
              {
                 isVisible ? <MdArrowDropUp size={25} /> :  <MdArrowDropDown size={25}/>
              }
             
          </span>
      </button>
      <DropDown 
         isVisible={isVisible}
      />
  </div>
    
  )
}
