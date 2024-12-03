import Image from 'next/image'
import React from 'react'
import NotFoundPic from '@/app/_assets/images/Businessman facepalming over a page not found error.webp'
import PrimaryBtn from '@/app/_components/buttons/PrimaryBtn'

const NotFoundCard = ({
    onTryAgain
}:{
    onTryAgain: () => void
}) => {
  return (
    <div className='h-full center flex-col gap-5 py-14'>
        <Image 
            src={NotFoundPic}
           
            alt='Businessman facepalming over a page not found error'
            priority={true}

        />
        <h2>The Data You Entered Is Not Found</h2>
        <PrimaryBtn text='Try again' onClick={onTryAgain} />
    </div>
  )
}

export default NotFoundCard