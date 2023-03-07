import React from 'react'
import{Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true}  duration={500}>
          Home
        </Link>
                </li>
            
                <li>
                <Link to="AboutMe" smooth={true}  duration={500}>
          About Me
        </Link>
                </li>
                <li>
                <Link to="Projects" smooth={true}  duration={500}>
          Projects
        </Link>
                </li>
                <li><Link to="contact" smooth={true}  duration={500}>
          Contact
        </Link>

                </li>
                
            </ul>
        </div>
        

    </div>
  )
}

export default Navbar
