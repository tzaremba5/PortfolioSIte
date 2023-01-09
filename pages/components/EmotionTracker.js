import React from 'react'
import Image from 'next/image'
import Tool from './tool';


function EmotionTracker() {
  return (
    <div className='flex-grow projectCard:w-[400px] mt-[20px] md:scale-105'>
      <div className='bg-white p-[10px]
      rounded-xl shadow-md hover:shadow-xl duration-150 ease-in
       '>
          <div className='ml-[10px] flex text-[15px]'>
            <div className='flex-col w-3/4'>
              <div className='text-light text-[18px]'>
                  Emotion Tracker Mobile App
                </div>
                <div className='text-[15px] md:text-[13.5px] font-light rounded-b-3xl leading-4'>
                  A flutter app that allows you to plot track your emotions (happy, sad, neutral) on a calender and plot them on a pie chart.
              </div>
            </div> 
            <div className='ml-[10px]'>
              <Image src='https://img.icons8.com/external-becris-lineal-becris/512/external-emotions-life-skill-becris-lineal-becris.png' width='75' height='75'/>
            </div>
          </div>
          <div className='flex-col ml-[10px] mt-[15px] text-[12px] md:text-[13.5px]'>
            <div className=''>
             Frameworks
            </div>
              <div className='flex font-light mt-[5px]'>
                <Tool name={'Flutter'}/>
              </div>

            <div>
              Languages
            </div>
            <div className='flex flex-wrap font-[4px] font-light mt-[5px]'>
                <Tool name={'Dart'}/>
            </div>
            <a href='https://github.com/TeddyZaremba/EmotionTracker' target='_blank'>
              <div className='flex w-min mt-[20px] cursor-pointer stroke-black hover:text-indigo-500 hover:stroke-indigo-500'>
                <div className='font-medium text-[15px]'>
                  Github
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

export default EmotionTracker
//https://img.icons8.com/external-becris-lineal-becris/512/external-emotions-life-skill-becris-lineal-becris.png