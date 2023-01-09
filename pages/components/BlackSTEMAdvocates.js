import React from 'react'
import Image from 'next/image'
import Tool from './tool';


function BlackSTEMAdvocates() {
  return (
    <div className='flex-grow projectCard:w-[400px] mt-[20px] md:scale-105'>
      <div className='bg-white p-[10px]
      rounded-xl shadow-md hover:shadow-xl duration-150 ease-in
       '>
          <div className='ml-[10px] flex text-[15px]'>
            <div className='flex-col w-3/4'>
              <div className='text-light text-[18px]'>
                  Black STEM Advocates
                </div>
                <div className='text-[15px] md:text-[13.5px] font-light rounded-b-3xl leading-4'>
                  A one page website for the Black STEM Advocates non-profit. It allows the user to sign up for the mailing list and make a donation.
              </div>
            </div> 
            <div className='ml-[10px]'>
              <h1 className="w-[75px] h-[75px] pt-[5px] font-mono font-bold 
              select-none leading-4"> BLACK <br/> STEM <br/> ADVOCATES <br/> PROJECT </h1>            
            </div>
          </div>
          <div className='flex-col ml-[10px] mt-[15px] text-[12px] md:text-[13.5px]'>
            <div className=''>
             Frameworks
            </div>
              <div className='flex font-light mt-[5px]'>
                <Tool name={'React'}/>
                <Tool name={'NextJS'}/>
                <Tool name={'HTML'}/>
                <Tool name={'CSS'}/>
              </div>

            <div>
              Languages
            </div>
            <div className='flex flex-wrap font-[4px] font-light mt-[5px]'>
                <Tool name={'Javascript'}/>
            </div>
            <a href='https://www.blackstemadvocates.org/' target="_blank" rel="noreferrer">
              <div className='flex w-min mt-[20px] cursor-pointer stroke-black hover:text-indigo-500 hover:stroke-indigo-500'>
                <div className='font-medium text-[15px]'>
                  Link
                </div>
                <div className='ml-[5px] w-[18px]'>
                    <svg className="" width="16px" height="16x" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
              </div>
            </a> 
          </div>
      </div>
    </div>
  )
}

export default BlackSTEMAdvocates