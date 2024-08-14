"use client"
import React,{useState} from 'react'
import {motion} from "framer-motion"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import { BsArrowRight,BsGithub } from 'react-icons/bs'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import Image from 'next/image'
import Link from 'next/link'
import WorkSlideButtons from '@/components/WorkSlideButtons'
const projects=[
  {
    num:"01",
    category:"fullstack",
    title:"tonight movies",
    description:"A movies reservation website",
    stack:[{name:"VUE JS"},{name:"CSS3"},{name:"NodeJs"},{name:"expressJS"},{name:"PostgreSql"}],
    image:"/assets/work/thumb3.png",
    github:"https://github.com/Tonight-movies/Booking-cinema-website",
    live:""

  },
  {
    num:"02",
    category:"fullstack",
    title:"Better-body",
    description:"A website dedicated for people who want to be in a good shape and take care of their health",
    stack:[{name:"Next JS"},{name:"CSS3"},{name:"NodeJs"},{name:"expressJS"},{name:"MongoDB"},{name:"TypeScript"}],
    image:"/assets/work/betterbody.png",
    github:"https://github.com/haythembensouissi/Better-body",
    live:""

  },
  {
    num:"03",
    category:"FullStack Mobile App",
    title:"Municipality App",
    description:"A mobile App for a municipality",
    stack:[{name:"React Native"},{name:"FireBase"}],
    image:"/assets/work/municipality.png",
    github:"https://github.com/haythembensouissi/Municipality-TN",
    live:""

  },{
    num:"04",
    category:"FullStack",
    title:"Chat GPT clone",
    description:"A clone for chat gpt",
    stack:[{name:"HTML5"},{name:"CSS3"},{name:"JS"}],
    image:"/assets/work/chatgpt.png",
    github:"https://github.com/haythembensouissi/ChatGPT-AI-App",
    live:""

  },
  {
    num:"05",
    category:"FullStack",
    title:"Youtube Clone",
    description:"A clone for youtube",
    stack:[{name:"React"},{name:"CSS3"}],
    image:"/assets/work/youtubeclone.png",
    github:"https://github.com/haythembensouissi/youtube-app",
    live:""

  },
  {
    num:"06",
    category:"FullStack",
    title:"DonAction",
    description:"A Website for donating to paletstanian people",
    stack:[{name:"NextJS"},{name:"CSS3"},{name:"NodeJs"},{name:"MongoDB"},],
    image:"/assets/work/donaction.png",
    github:"https://github.com/haythembensouissi/DonAction",
    live:""

  },
  {
    num:"07",
    category:"FrontEnd",
    title:"8-puzzle",
    description:"An 8-puzzle game",
    stack:[{name:"Python"}],
    image:"/assets/work/8-puzzle.png", 
    github:"hhttps://github.com/haythembensouissi/8-puzzle",
    live:""

  },
  
]
const Work = () => {
  const [project,setProject]=useState(projects[0])
  const handleSlideChange=(swiper)=>{
const currentIndex=swiper.activeIndex
setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
    <div className='container mx-auto'>
    <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ' >
    
    </div>
    <div className='flex flex-col gap-[30px] h-[50%]'>
    <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
    {project.num}
    </div>
    <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize '>{project.title}</h2>
    <p className='text-white/60'>{project.description}</p>
    <ul className='flex gap-4'>
    {project.stack.map((item,index)=>{
      return (
        <li key={index}>
        {item.name}
        {index!==project.stack.length-1 && ","}
        </li>
      )
    })}
    </ul>
    <div className='border border-white/20 ' ></div>
    <div className='flex items-center gap-4'>
    <Link href={project.live}>
    <TooltipProvider>
    <Tooltip>
    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
    <BsArrowRight className='text-white text-3xl group-hover:text-accent' />
    </TooltipTrigger>
    <TooltipContent>
    <p>see more</p>
    </TooltipContent>    </Tooltip>
    </TooltipProvider>
    </Link>
    <Link href={project.github}>
    <TooltipProvider>
    <Tooltip>
    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
    <BsGithub className='text-white text-3xl group-hover:text-accent' />
    </TooltipTrigger>
    <TooltipContent>
    <p>github repository</p>
    </TooltipContent>
    </Tooltip>
    </TooltipProvider>
    </Link>
    </div>

    </div>
    <div className='w-full xl:w-[50%]'>
    <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
    {projects.map((item,index)=>{
      return(
        <SwiperSlide key={index} className='w-full' >
        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
        <div className=''></div>
        <div className='relative w-full h-full'>
        <Image src={project.image} alt='image' fill className='object-cover'/>
        {console.log(project.image)}
        </div>
        </div>
        </SwiperSlide>
      )
    })}
    <WorkSlideButtons ContainerStyles="flex gap absolute right-0 buttom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
    BtnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
    />
    </Swiper>
    </div>
    </div>
    </div>
    
    </motion.section>
  )
}

export default Work