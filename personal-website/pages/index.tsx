import Head from 'next/head'
import Image from 'next/image'
import { MutableRefObject, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import BlogSection from './components/Sections/BlogSection'
import ContactSection from './components/Sections/ContactSection'
import LandingSection from './components/Sections/LandingSection'
import IntroSection from './components/Sections/IntroSection'
import ProjectsSection from './components/Sections/ProjectsSection'
import WorkExperienceSection from './components/Sections/WorkExperienceSection copy'

export default function Home() {

  const sectionRefs: MutableRefObject<{ [key: string]: any }> = useRef({});


  return (
    <>
      <Head>
        <title>Brent Julius</title>
        <meta name="description" content="Brent Julius' Personal Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 
      <ScrollLine viewBox='0 0 1223 1236' path='M408.834 3C308.752 5.40159 95.9104 4.00066 2 3V651.976H464.379V611.313H594.486V651.976H1221V1236' />
      <ScrollLine viewBox='0 0 1223 1236' path='M814.166 3C914.248 5.40159 1127.09 4.00066 1221 3V651.976H758.621V611.313H628.514V651.976H2.00003V1236' />
       */}

      <div>
        <LandingSection handleCollectionClick={handleXDisplayCollectionClick} />
        <IntroSection ref={(element: any) => sectionRefs.current['Introduction'] = element} />
        <WorkExperienceSection ref={(element: any) => sectionRefs.current['WorkExperience'] = element} />
        <ProjectsSection ref={(element: any) => sectionRefs.current['Projects'] = element} />
        <BlogSection ref={(element: any) => sectionRefs.current['Blog'] = element} />
        <ContactSection ref={(element: any) => sectionRefs.current['Contact'] = element} />

      </div>

    </>
  )

  function handleXDisplayCollectionClick(collection: string) {
    if (collection.split(':')[0] !== 'Random') {
      sectionRefs.current[collection].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
}
