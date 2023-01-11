import React from 'react'
import Image from 'next/image'

function WorkExperience() {
  return (
    <div className='mt-[20px] mx-[5px] rounded-lg'>
        <div className='pt-[20px] pb-[50px] flex justify-center'>
            <div className='md:w-3/4'>
                <div className='w-screen flex justify-center md:w-full'>
                    <div className='w-3/4 md:w-full text-[22px] md:text-[30px] text-indigo-500 font-bold'>
                        Work Experience
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex w-full mt-[20px] mr-[10px] px-[10px] py-[20px] rounded-lg'>
                        <div className='min-w-[150px]'>
                            <Image src='https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/UCCS-Mountain-Lions-900x0.png' width='150' height='150'/>
                        </div>
                        <div>
                            <div className='font-bold text-[18px] md:text-[24px]'>
                                Machine Learning Research Intern
                            </div>
                            <div className='text-[16px] md:text-[22px] text-slate-800'>
                                University of Colorado - Colorado Springs                   
                            </div>
                            <div className='text-[15px] md:text-[18px] font-light text-slate-500'>
                                June 2021 - August 2022                          
                            </div>
                            <div className='text-[15px] md:text-[18px] text-slate-800 mt-[10px]'>
                                I Developed preprocessing and feature extracIon pipeline for the EEG data of 21 subjects.
                                I Tested ConvoluIonal Neural Network (CNN) to classify imagined arm and foot movement.
                                I achieved greater than 95% accuracy for right hand vs. left hand.
                                Our paper was presented and published in IEEE WCCI 2022.
                            </div>
                            <a href='https://ieeexplore.ieee.org/abstract/document/9891904?casa_token=Sz3JuC-Tfv4AAAAA:wS63pNYc34tkqdYwBWKJ8lOcxSewMQkzrZAco9oAxUVD2MwIyXQ53K2mdIUuUofdsR8aEDlc' target="_blank" rel="noreferrer">
                                <div className='flex w-min mt-[20px] cursor-pointer stroke-black hover:text-indigo-500 hover:stroke-indigo-500'>
                                    <div className='text-[15px] md:text-[18px]'>
                                    Paper
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
            </div>
        </div>
    </div>
  )
}

export default WorkExperience