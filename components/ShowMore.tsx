"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import { CustomButton } from '.'
import { updateSearchParams } from '@/utilities'

const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {
    const router = useRouter();

    const handleNav = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPath = updateSearchParams("limit", `${newLimit}`);

        router.push(newPath, {scroll:false});
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton
            title='Show More'
            btnType='button'
            buttonStyles='bg-primary-blue rounded-custom1 text-white'
            handleClick={handleNav}
            />
        )}
    </div>
  )
}

export default ShowMore