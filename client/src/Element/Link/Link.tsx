import { NavLink } from "react-router-dom"



type LinkProps = {
    label: string,
    icon: React.ReactNode
    to?: string,
    toSlide?: boolean
}

export const LinkItem = (props: LinkProps) => {
  return (
    <NavLink to={props.to as string}>
        <button className='w-full flex justify-start items-center gap-3 cursor-pointer rounded-lg  border-b-2 p-4 hover:bg-[#5932e6] hover:text-[#f2f2f2] transition-all duration-200'>
            <span className="w-6">{props.icon}</span>
            <span className={` text-lg font-medium ${props.toSlide ? 'hidden': 'block'} transition-all duration-300`}>{props.label}</span>
        </button>
    </NavLink>
  )
}
