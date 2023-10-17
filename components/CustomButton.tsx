"use client";
import { CustomButtonProps } from '@/types';
import Image from 'next/image'

// Takes different types of props in order to be reusable
const CustomButton = ({ title, buttonStyles, handleClick, btnType, textStyles, rightIcon}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"} 
            className={`custom-btn ${buttonStyles}`}
            onClick={handleClick}
            >
            {/* flex-1 ignores initial size and allows item to grow and shrink */}
            <span className={`flex-1 ${textStyles}` }>
                {title}
            </span>
            {rightIcon && ( 
                <div className='relative w-6 h-6'>
                    <Image 
                    src={rightIcon}
                    alt='right icon'
                    fill
                    className='object-contain'/>
                </div>
            )}
        </button>
    )
}

export default CustomButton