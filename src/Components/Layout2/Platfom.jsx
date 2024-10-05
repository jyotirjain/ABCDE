import React from 'react'
import cardPlatform from '../../Images/Layout2/cardPlatform.png'

const Platfom = () => {
  return (
    <>
    <section>
        <div className='w-[100%] border-[2px]  py-[50px] '>
            <div className=' border-[2px] flex m-auto w-[80%] my-[30px]'>
                <div className='w-[50%] border-[2px]'>
                    <img src={cardPlatform} alt="" />
                </div>
                <div className='w-[50%] border-[2px]'>

                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Platfom