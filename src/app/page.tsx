"use client"

import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Nav } from '@/components/Nav'
import { Projects } from '@/components/Projects'
import { Resume } from '@/components/Resume'

export default function Home() {
  return (
    <div className='scroll-container'>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}
