import React from 'react'

import icon1 from '/src/assets/icon/icon1.png'
import icon2 from '/src/assets/icon/icon2.png'
import icon3 from '/src/assets/icon/icon3.png'

import ReasonCard from './ReasonCard'

export default function Why() {

  return (
    <div className="pb-12 relative">
      <div className='why-bg w-[50vw] h-full absolute left-0 top-0 z-[-1] rotate-y-180'>
      </div>
      <div className='z-4'>
        <div className='text-center pt-30 mb-15'>
          <h4 className='text-white text-3xl font-normal'>ทำไมถึงควรลงกิจกรรมนี้</h4>
        </div>
        <div className='max-w-4xl mx-auto px-10 xl:max-w-[1400px] lg:px-0'>
          <div className='grid grid-cols-1 gap-[25px] lg:grid-cols-3'>
            <ReasonCard>
              <div className='flex justify-between'>
                <div className="w-34 h-31.5 mb-5 mt-11 relative">
                  <img src={icon1} className='absolute -left-5' alt="" />
                </div>
                <p className='text-3xl'>01</p>
              </div>
              <div className='font-line-seed-sans'>
                <h3 className="text-4xl mb-3">เหตุผล</h3>
                <p className="text-sm font-normal">โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน</p>
              </div>
            </ReasonCard>
            <ReasonCard>
              <div className='flex justify-between'>
                <div className="w-34 h-31.5 mb-5 mt-11 relative">
                  <img src={icon2} className='absolute -left-5' alt="" />
                </div>
                <p className='text-3xl'>02</p>
              </div>
              <div className='font-line-seed-sans'>
                <h3 className="text-4xl mb-3">เหตุผล</h3>
                <p className="text-sm font-normal">โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน</p>
              </div>
            </ReasonCard>
            <ReasonCard>
              <div className='flex justify-between'>
                <div className="w-34 h-31.5 mb-5 mt-11 relative">
                  <img src={icon3} className='absolute -left-5' alt="" />
                </div>
                <p className='text-3xl'>03</p>
              </div>
              <div className='font-line-seed-sans'>
                <h3 className="text-4xl mb-3">เหตุผล</h3>
                <p className="text-sm font-normal">โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน</p>
              </div>
            </ReasonCard>
          </div>
        </div>
      </div>
      <div className='why-bg w-[51vw] h-full absolute right-0 top-0 z-[-1]'>
      </div>
    </div>
  )
}
