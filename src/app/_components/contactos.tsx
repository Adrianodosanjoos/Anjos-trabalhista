'use client'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'

export function Contactos() {

   return ( 
      <div>
    <h1 className="text-3xl text-black font-bold mb-12 flex align-text-center justify-center">Contactos</h1>

    <div>
       <a href="#"
                            target="_blank"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold 
                    flex items-center justify-center w-fit gap-2 hover:scale-102 duration-300">
                            <WhatsappLogoIcon className='w-5 h-5' />
                            Contacto via WhatApp
                        </a>
    </div>
    </div>
    

   )


}