'use client'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import logoimg from '../../../public/1.png'
import Image from 'next/image'

export function Contactos() {

   return ( 
      <section className="py-16 relative  max-h-1/2-50px">

         <h2 className='text-black font-bold'>Conte Conosco</h2>

          <div className='block h-full'>
                <Image
                src={logoimg}
                alt='foto de fundo'
                fill
                sizes='100vw'
                priority
                className='object-cover opacity-60 relative'
              
                />
                  <div className=' absolute'></div>
                  <h2 className='text-black font-bold'>Conte Conosco</h2>
            </div>

      <div>
         
    <h1 className="text-3xl text-black font-bold mb-12 align-text-center"></h1>

    <h2 className='text-black font-bold'>Conte Conosco</h2>

    </div>

   
    
    </section>
   )


}