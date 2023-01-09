import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='w-screen fixed bg-slate-50 z-20 py-[5px] bg-opacity-80'>
        <div className='flex justify-end mr-[35px] md:mr-[75px] h-full'>
            <a href='https://github.com/TeddyZaremba' target='_blank' rel="noreferrer">
                <div className='border-slate-900 border-2 rounded-full m-[5px] p-[5px] cursor-pointer mr-[10px]'>
                    <div className='select-none'>
                        <Image src='https://img.icons8.com/ios-glyphs/512/github.png' width='30' height='30'/>
                    </div>
                </div>
            </a>
            <a href='https://www.linkedin.com/in/ted-zaremba-8bb970230/' target='_blank' rel="noreferrer">
                <div className='border-slate-900 border-2 rounded-full m-[5px] p-[5px] cursor-pointer'>
                    <div className='select-none'>
                        <Image src='https://img.icons8.com/ios-glyphs/512/linkedin-2.png' width='30' height='30'/>
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Header

{/* <Image src='https://img.icons8.com/external-dreamstale-lineal-dreamstale/512/external-distort-design-dreamstale-lineal-dreamstale.png' width='20' height='20'/>
<Image src='https://img.icons8.com/external-dreamstale-lineal-dreamstale/512/external-distort-design-dreamstale-lineal-dreamstale.png' width='20' height='20'/> */}