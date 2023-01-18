import Head from 'next/head'
import Image from 'next/image'
import ProjectLabel from './components/ProjectLabel'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import DiscordBot from './components/DiscordBot'
import EmotionTracker from './components/EmotionTracker'
import ServerClient from './components/ServerClient'
import DistoriaWebApp from './components/DistoriaWebApp'
import Top from './components/Top'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import BlackSTEMAdvocates from './components/BlackSTEMAdvocates'
import CrossSubject from './components/CrossSubject'
import CTA from './components/CTA'
import Earthquake from './components/Earthquake'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })
const date = new Date();
const morning = date.getHours() > 4 && date.getHours() <= 12;
const afternoon = date.getHours() > 12 && date.getHours() <= 17;
const evening = date.getHours() > 17 || date.getHours() <= 4;

export default function Home() {

  return (
    <>
      <Head>
        <title>Teddy Zaremba Portfolio Website</title>
        <meta name="description" content="Teddy Zaremba Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex bg-slate-50 text-gray-900 w-screen'>
          <Header/>
          <div className='flex-col pt-[100px]'>
            <div className='flex justify-center'>
              <Top/>
            </div>
            <div className='w-screen bg-slate-100 flex justify-center transform 
             skew-y-12 text-[20px] font-bold leading-[2rem] mt-[100px] -z-5'>
              <div className='-skew-y-12 w-3/4'>
                <div className='text-indigo-500 text-[22px] md:text-[30px]'>
                  My Projects
                </div>
                <div className="mt-[20px] text-[18px] md:text-[26px] font-normal">
                  <div>
                    Software Engineering
                  </div>
                  <div className='flex justify-center'>
                    <div className='projectCard:grid grid-cols-2 gap-[20px] md:gap-[30px]'>
                      <DistoriaWebApp/>
                      <ServerClient/>
                      <EmotionTracker/>
                      <BlackSTEMAdvocates/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-screen flex justify-center transform 
               text-[20px] font-bold leading-[2rem] mt-[50px]'>
              <div className='w-3/4'>
                <div className="mt-[20px] text-[18px] md:text-[26px] font-normal">
                  <div>
                    Data Science
                  </div>
                  <div className='flex justify-center'>
                    <div className='projectCard:grid grid-cols-2 gap-[15px] md:gap-[30px]'>
                      <CrossSubject/>
                      <Earthquake/>
                      <CTA/>
                      <DiscordBot/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[50px] border border-1 border-dashed border-slate-200'/>
            <WorkExperience/>
            <Skills/>
          </div>
      </div>
    </>
  )
}
