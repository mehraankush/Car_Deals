"use client"
import React from 'react'
import { CustomButtom } from '@/types'
import Image from 'next/image'


const CustomButton = ({title,containerStyles,btnType,handleClick, textStyles, rightIcon}:CustomButtom) => {
  return (
    <button
    disabled={false} 
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    
    >
     <span className={`flex-1 ${textStyles}`}>{title}</span>
     {rightIcon && <div className='relative w-6 h-6 '>
       <Image src={rightIcon} alt='rightIcon'  className='object-contain' height={20} width={20}/>
     </div> }
    </button>
  )
}

export default CustomButton