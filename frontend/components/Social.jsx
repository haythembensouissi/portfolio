import {FaGithub,FaLinkedin,FaYoutube,FaTwitter} from "react-icons/fa"
import Link from "next/link"
const socials=[
    {icon:<FaGithub />,path:"https://github.com/haythembensouissi"},
    {icon:<FaLinkedin />,path:"www.linkedin.com/in/haythem-bensouissi-882b84248"},
    
]
const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
   </div>
  )
}

export default Social