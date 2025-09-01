import Image from 'next/image';
import Rede from '../../assets/rede.png'
import Explorar from '../../assets/telescopio.png'
import Hamb from '../hamb/hambMenu';
import Link from 'next/link';

export default function Header() {
  return (
    <>

    <header className="flex justify-end mx-auto text-blue-100  mt-8 mb-5 mr-15 ">

      <section className="flex justify-between gap-8 mb-2 md:gap-20 lg:gap-30 font-poppins">

        <div className="flex justify-center mx-4">
          <h1 className="text-xl font-semibold">Cosmic Explorer</h1>
        </div>

        <div className='flex mt-1'>
          <Hamb />
        </div>
        
        <div className='hidden sm:flex sm:gap-6'>
          <div className='flex justify-center gap-2 hover:bg-blue-950 hover:font-semibold rounded-md w-40 p-1 '>
            <Image src={Rede} alt='' className='w-6 h-6' />
            <Link href="/" className='text-base'>Sistema Solar</Link>
          </div>

        <div className='flex justify-center gap-2 hover:bg-blue-950 hover:font-semibold rounded-md w-35 p-1 '>
            <Image src={Explorar} alt='' className='w-6 h-6' />
            <Link href="/explorar" className='text-base'>Explorar</Link>

        </div>      
        </div>
      </section>
    </header>
    </>
    )
}