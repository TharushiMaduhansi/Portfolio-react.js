import React from 'react'
import app from '../assets/app.png'


const Projects = () => {
  return (
    <div name='Projects' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300'>Projects</p>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                <div >
                <img src={require('../assets/app.png')} />
                </div>
                <div className='sm:text-center text-4xl font-bold '>
                    <br/>
                    <p>Victual mobile application</p>
                    <br />  <br /> <br />
            <p>Agriculture Website</p>
            <br />  <br /> <br />
            <p>Illustrator</p>
                </div>
            </div>

            
           </div>
        
        </div>


   
  )
}

export default Projects