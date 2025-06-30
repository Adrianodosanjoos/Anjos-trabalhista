'use client'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import logoimg from '../../../public/1.png'
import Image from 'next/image'

export function Contactos() {

   return ( 
      <div>
    <h1 className="text-3xl text-black font-bold mb-12 flex align-text-center justify-center">Conte conosco</h1>

    <div>
       <a href="#"
                            target="_blank"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold 
                    flex items-center justify-center w-fit gap-2 hover:scale-102 duration-300">
                            <WhatsappLogoIcon className='w-5 h-5' />
                            Contacto via WhatApp
                        </a>
    </div>

          
               <div>
                <Image
                src={logoimg}
                alt='foto de fundo'
                fill
                sizes='20vw'
                priority
                className='object-cover opacity-60 mt-28'
                />
                  <div className=' absolute inset-0 bg-black  opacity-5 '></div>
            </div>
           

    </div>
    

   )


}