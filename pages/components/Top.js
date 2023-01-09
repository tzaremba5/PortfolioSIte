import React from 'react'

const date = new Date();
const morning = date.getHours() > 4 && date.getHours() <= 12;
const afternoon = date.getHours() > 12 && date.getHours() <= 17;
const evening = date.getHours() > 17 || date.getHours() <= 4;

function Top() {
  return (
    <div className='w-3/4 z-10'>
        {morning && 
              <div className='text-[22px] md:text-[30px] font-light'>
                Good morning! My name is
              </div>          
            }
            {afternoon && 
              <div className='text-[22px] md:text-[30px font-light'>
                Good afternoon! My name is
              </div>          
            }
            {evening && 
              <div className='text-[22px] md:text-[30px] font-light'>
                Good evening! My name is
              </div>          
            }
            <div className='text-[30px] md:text-[50px] font-bold leading-[2rem] md:leading-[3rem] text-indigo-500'>
              Teddy Zaremba. <br/> I build apps and play with data. 
            </div>
            <div className='md:text-[20px] max-w-[700px] text-gray-700 font-light pr-[30px] mt-[20px] '>
              I'm a computer science student at the University of 
              Illinois at Chicago graduating Fall 2023. I'm passionate about
              backend development and making apps that can scale. 
        </div>
    </div>
  )
}

export default Top