"use client"

import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { Resume } from '@/components/Resume'

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory mx:auto overflow-scroll' style={{scrollSnapType: 'y mandatory'}}>
      <div className='h-screen snap-always snap-start border-b-2 border-white'>
        <Header />
      </div>
      <div className='h-screen snap-always snap-start'>
        <About />
      </div>
      <div className='h-screen snap-always snap-start'>
        <Projects />
      </div>
      <div className='h-screen snap-always snap-start'>
        <Resume />
      </div>
      <div className='h-screen snap-always snap-start'>
        <Contact />
      </div>
    </div>
  )
}
