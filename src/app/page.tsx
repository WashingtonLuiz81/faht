import Image from "next/image"

import LogoFaht from '../assets/img/faht.png'

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center">
      <Image src={LogoFaht} alt='FAht - Logo' className="w-36 h-[8rem]" />
      <p className="flex flex-col gap-3 text-center text-4xl font-extrabold text-slate-700 tracking-wide">Federação de Aspirantes <strong className="text-yellow-500">Hattrick</strong></p>
    </div>
  );
}
