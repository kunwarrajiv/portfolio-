import logo from '../assets/KunwarRajivLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

            <FaFacebook className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer" size={30} />

            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
        </div>
    </nav>

  )
}

export default Navbar

