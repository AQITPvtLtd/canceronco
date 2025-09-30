import About from '@/components/homepage/About'
import Banner from '@/components/homepage/Banner'
import Best from '@/components/homepage/Best'
import CommonCancer from '@/components/homepage/CommonCancer'
import Faq from '@/components/homepage/Faq'
import Features from '@/components/homepage/Featues'
import Immunotherapy from '@/components/homepage/Immunotherapy'
import Stats from '@/components/homepage/Stats'
import Videos from '@/components/homepage/Videos'
import WhyChooseUs from '@/components/homepage/WhyChooseUs'
import React from 'react'
import Testimonial from '@/components/homepage/Testimonials'
import Services from '@/components/homepage/Services'

const page = () => {
  return (
    <div>
      <Banner />
      <CommonCancer />
      <About />
      <Immunotherapy />
      <Best />
      <Services />
      <Stats />
      <Videos />
      <WhyChooseUs />
      <Features />
      <Faq />
      <Testimonial />
    </div>
  )
}

export default page