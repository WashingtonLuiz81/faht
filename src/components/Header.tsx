import Image from "next/image"
import Link from "next/link"

import Logo from '../assets/img/faht.png'
import NavBar from "./NavBar"
// import SocialNavBar from "./SocialNavBar"

const Header = () => {
  return (
    <header className="absolute left-0 -top-2 w-full h-24 sm:top-0 sm:h-28">
      <div className="absolute w-[330px] h-[5.5rem] left-0 top-0 z-10 sm:w-[350px] sm:h-[7.5rem]">
        <span className="absolute w-[330px] skew-x-[-33deg] -left-10 top-0 bottom-0 bg-primary sm:w-[350px]" />

        <Link href="/">
          <div className="relative w-[285px] h-full flex items-center sm:justify-around">
            <Image src={Logo} width={80} height={76} alt="Logo" className="w-16 sm:w-20" />

            <span className="max-w-[12.1rem] text-sm text-right font-semibold text-white uppercase tracking-wide relative group sm:max-w-60">
              Federação de Aspirantes{' '}
              <strong className="text-submenu text-2xl font-bold relative inline-block">
                Hattrick
                {/* Animação glow no texto "Hattrick" */}
                <span className="absolute inset-0 bg-secondary opacity-50 blur-lg rounded-lg group-hover:animate-pulse transition-all duration-500"></span>
              </strong>
            </span>
          </div>
        </Link>
      </div>

      <div className="hidden items-center justify-end h-8 px-5 sm:flex">
        {/* <SocialNavBar /> */}
      </div>

      <div className="relative w-full h-20 bg-black bg-opacity-30 px-5 z-[1]">
       <div className="flex justify-end">
        <NavBar />
       </div>
      </div>
    </header>
  )
}

export default Header