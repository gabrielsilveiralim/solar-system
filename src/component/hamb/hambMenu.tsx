'use client'
import Rede from '../../assets/rede.png'
import Explorar from '../../assets/telescopio.png'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';





export default function Hamb() {
  const [menuVisible, setMenuVisible] = useState(false);
  
  function toggleMenu() {
    setMenuVisible((prev) => !prev);
  }

  return (
  <>
    <section>
      <button className="sm:hidden cursor-pointer" onClick={toggleMenu}>
        <div className={`w-6 h-0.5 bg-blue-100 transition-all duration-300 ${menuVisible ? 'rotate-50 translate-y-1 translate-x-44 mr-4' : '' }`}></div>
        <div className={`w-6 h-0.5 bg-blue-100 transition-all duration-300 mt-1 ${menuVisible ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-blue-100 transition-all duration-300 mt-1 ${
          menuVisible ? '-rotate-50 -translate-y-2 translate-x-44 mr-4' : ''}`}></div>
      </button>

      <nav className={`${menuVisible ? '' : 'hidden'} `} id="bg">
        <ul className="flex flex-col md:flex-row gap-4 mr-2">
          <div className='flex justify-center gap-2 hover:bg-blue-950 hover:font-semibold rounded-md w-40 p-1 -mt-7.5'>
            <Image src={Rede} alt='' className='w-6 h-6' />
            <Link href="/" className='text-base'>Sistema Solar</Link>
          </div>

          <div className='flex justify-center gap-2 hover:bg-blue-950 hover:font-semibold rounded-md w-35 p-1 -mt-3'>
            <Image src={Explorar} alt='' className='w-6 h-6' />
            <Link href="/explorar" className='text-base'>Explorar</Link>
          </div>
        </ul>
      </nav>
    </section>
  </>
  );
}