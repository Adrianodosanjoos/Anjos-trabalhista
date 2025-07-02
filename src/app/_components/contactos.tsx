'use client'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import logoimg from '../../../public/1.png'
import Image from 'next/image'

export function Contactos() {

   return ( 
      <section className="py-16 relative  max-h-1/2-50px">

          <div className='block h-full'>
                <Image
                src={logoimg}
                alt='foto de fundo'
                fill
                sizes='100vw'
                priority
                className='object-cover opacity-60 relative'
              
                />
                  <div className=' '></div>
            </div>

      
    
    </section>
   )


}