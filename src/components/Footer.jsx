import SITKMUTTLogo from '../assets/images/KMUTT+SIT.png'
import SITLogo from '../assets/images/SITLogo.png'
import MBLogo from '../assets/images/mysticbond_logo.png'
import IG from '../assets/icon/IG.png'
import DC from '../assets/icon/DC.png'

const DCLink = ''

export default function Footer() {
  return (
    <footer className="bg-black py-10 px-7 sm:px-9 lg:py-12 lg:px-31">
      <div className='flex flex-col gap-6 items-center max-w-lg mx-auto mb-18 lg:flex-row lg:justify-between lg:mx-0 lg:gap-0 lg:max-w-full lg:mb-8.5'>
        <img className='w-60 lg:w-110' src={SITKMUTTLogo} alt="" />
        <img className='lg:w-80 xl:w-94' src={MBLogo} alt="" />
      </div>
      <div className='lg:flex lg:flex-col'>
        <div className='text-white flex justify-center mb-7.5 gap-5 sm:gap-10 lg:mb-0 lg:justify-end lg:gap-5'>
          <a href="https://www.instagram.com/sit.it.mysticbond?utm_source=ig_web_button_share_sheet&igsh=cDIzODQ4OTh2NjRu">
            <div className='w-37 border-white border rounded-[60px] py-2 px-6 flex justify-center items-center gap-2 cursor-pointer sm:w-42 sm:py-3'>
              <img className='size-4' src={IG} alt="" />
              <p>Instragram</p>
            </div>
          </a>
          <a href={DCLink}>
            <div className='w-37 border-white border rounded-[60px] py-2 px-6 flex justify-center items-center gap-2 cursor-pointer sm:w-42 sm:py-3'>
              <img className='w-5 h-4' src={DC} alt="" />
              <p>Discord</p>
            </div>
          </a>
        </div>
        <div className='border-t border-[#B3B3B3] lg:-order-1 lg:mb-8.5'></div>
        <div className='py-6 text-white font-line-seed-sans flex justify-center gap-6 sm:gap-8 lg:justify-start lg:absolute lg:mt-3 xl:mt-7'>
          <img className='w-12 xl:hidden' src={SITLogo} alt="" />
          <div className='xl:hidden'>
            <p className='text-[16px] font-bold'>School of Information Technology</p>
            <p className='text-[10px] text-[#AAAAAA]'>King Mongkut’s University of Technology Thonburi.</p>
          </div>
          <p className='text-[15px] font-bold hidden xl:block'>School of Information Technology, King Mongkut’s University of Technology Thonburi.</p>
        </div>
      </div>
    </footer>
  );
}
