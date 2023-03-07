import React from 'react'

const AboutMe = () => {
  return (
    <div name='AboutMe' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center item-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm: text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4'>About Me</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold ' >
                   <p>hello, I am Tharushi Maduhansi. nice to meet you. please look around</p> 
                </div>
                <div>
                    <p>
                    I'm a Freelancer Front-end Developer with 1 years of experience.
                    I specialized in UX/UI design and web element development. I’m passionate about helping startups grow, improve their customer experience and to raise venture capital through good design.  
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe