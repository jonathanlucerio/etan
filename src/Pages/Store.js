import React from 'react'

function Store() {
  return (
    <div className='mx-48'>
        <h1 className='text-[#ff8730] font-bold text-5xl text-center my-10'>Store</h1>
        <div className='flex gap-5 mt-10'>
          <div className='w-[300px] h-screen'>
            <div className='border-2 border-white rounded-md'>
              <dl className='text-white text-[18px] p-5'>
                <dt><b>Gender</b></dt>
                <dd>All</dd>
                <dd>Men</dd>
                <dd>Women</dd>
                <dd>Neutral</dd>
              </dl>
            </div>
            <div className='border-2 border-white rounded-md mt-5'>
              <dl className='text-white text-[18px] p-5'>
                <dt><b>Size</b></dt>
                <dd>XS</dd>
                <dd>S</dd>
                <dd>M</dd>
                <dd>L</dd>
                <dd>XL</dd>
                <dd>XXL</dd>
              </dl>
            </div>
            
          </div>

          <div className='w-[1150px] h-screen border-white border-2'></div>
        </div>

        <div className='w-full h-screen'></div>
        

    </div>
  )
}

export default Store