

type AvatarProps = {
     imageSrc: string,
     size: number
}
export const Avatar = (props: AvatarProps) => {
  return (
    <div className='w-full h-full cursor-pointer'>
        <span className={`w-${props.size} h-${props.size}`}>
            <img src={props.imageSrc} className="rounded-full" style={{ width:`${props.size}rem`}} />
        </span>
    </div>
  )
}
