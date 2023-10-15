"use client";
import { CustomButtonProps } from '@/types';
import Image from 'next/image'

// Takes different types of props in order to be reusable
const CustomButton = ({ title, buttonStyles, handleClick }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={'button'}
            className={`custom-btn ${buttonStyles}`}
            onClick={handleClick}>
            {/* flex-1 ignores initial size and allows item to grow and shrink */}
            <span className={'flex-1'}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton