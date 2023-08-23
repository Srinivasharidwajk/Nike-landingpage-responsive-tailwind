import React from 'react'
interface IProps{
    imgURL:string;
    label:string;
    subtext:string
}

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='flex w-11 h-11 justify-center items-center bg-coral-red rounded-full'>
            <img src={imgURL} alt="ImageLable" width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl font-bold leading-normal'>{label}</h3>
        <p className='mt-3 break-words leading-normal text-slate-gray text-lg font-montserrat  '>{subtext}</p>
    </div>
  )
}

export default ServiceCard