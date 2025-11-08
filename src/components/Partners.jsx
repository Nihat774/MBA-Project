import Marquee from 'react-fast-marquee'
import { partners } from '../constants/partners'

function Partners() {
    
  return (
     <div className=" flex items-center justify-around flex-col h-[36vh] -mx-10 md:-mx-20">
        <h2 className="font-bold text-4xl">Partners</h2>
         <Marquee speed={35} gradient={false}>
          {
            partners.map((item)=>{
              return(
                <div key={item.id} className="flex flex-col items-center">
                  <img src={item.icon} alt={item.name} className="px-20" />
                  {/* <p>{item.name}</p> */}
                </div>
              )
            })
          }
        </Marquee>
      </div>
  )
}

export default Partners