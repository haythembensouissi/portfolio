"use Client"
import { useSwiper } from "swiper/react"
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi"
const WorkSlideButtons = ({ContainerStyles,BtnStyles,iconsStyles}) => {
    const swiper=useSwiper()
  return (
    <div className={ContainerStyles}>
    <button className={BtnStyles}><PiCaretLeftBold className={iconsStyles} onClick={()=>swiper.slidePrev()}/></button>
    <button className={BtnStyles}><PiCaretRightBold className={iconsStyles} onClick={()=>swiper.slideNext()} /></button>
    </div>
  )
}

export default WorkSlideButtons