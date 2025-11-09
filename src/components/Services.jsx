import { services } from '../constants/services'

function Services() {
   
    return (
        <div className='flex flex-col'>
            
            <h2 className='text-4xl font-bold py-7 flex justify-center'>Services</h2>
            <div className='flex md:flex-row gap-5 md:gap-0 flex-col items-center justify-between'>
                {
                services.map((item)=>{
                    return(
                        <div key={item.id} className='md:w-[25vw] flex items-center flex-col gap-5'>
                            <img src={item.image} alt={item.title} />
                            <h2 className='md:h-[12vh] font-bold text-2xl text-center'>{item.title}</h2>
                            <p className='whitespace-pre-line text-lg md:text-xl text-center'>{item.text}</p>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default Services