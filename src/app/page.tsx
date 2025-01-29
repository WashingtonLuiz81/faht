import Image from "next/image"

import Slider from '@/assets/img/main-slider-img.jpg'
import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-full">
      <div className="relative h-screen">
        <Image src={Slider} className="h-full object-cover object-center lg:object-right" alt="" />

        <div className="absolute top-1/2 left-1/2 px-9 transform translate-x-[-50%] translate-y-[-50%] lg:right-0 lg:top-[55%] lg:translate-x-0 lg:translate-y-0">
          <div className="text-right">
            <h3 className="uppercase text-6xl text-white font-normal bg-black bg-opacity-40 px-5 py-4">Life is <strong className="text-secondary">about timing</strong></h3>
            <p className="text-2xl font-normal pt-4 text-white">Just play. <strong className="text-secondary font-normal">Have fun.</strong> Enjoy the game</p>
          </div>

          <button className="group h-10 float-right mt-6 relative uppercase text-submenu text-xs font-bold bg-secondary pr-20 pl-5 py-2 before:absolute before:border before:border-secondary before:text-secondary before:-top-1 before:-right-1 before:-bottom-1 before:-left-1 hover:bg-submenu hover:text-secondary transition-colors duration-300">
            Read More
            <div className="overflow-hidden absolute top-0 right-0 w-16 h-full">
              <span className="w-full h-full flex items-center justify-center bg-submenu text-secondary skew-x-[-33deg] origin-bottom-left transition-all duration-300 ease-in-out group-hover:bg-secondary group-hover:text-submenu">
                <ChevronRight width={20} className="skew-x-[33deg]" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
