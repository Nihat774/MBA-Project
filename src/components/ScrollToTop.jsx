import { useEffect, useState } from "react"
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 70) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => { window.removeEventListener("scroll", handleScroll) }
    }, [])
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            {
                isVisible && (
                    <div onClick={() => ScrollToTop()} className='fixed bottom-8 cursor-pointer right-8 p-3 text-xl rounded-full bg-blue-500 text-white'>
                        <FaAngleUp />
                    </div>
                )
            }
        </>
    )
}

export default ScrollToTop