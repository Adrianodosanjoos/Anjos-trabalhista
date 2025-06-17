import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import logoimg from '../../../public/1.png'
import Image from 'next/image'

export function Hero(){
    return(
        <section className="bg-#ffff text-black relative overflow-hidden">

            <div className='container mx-auto py-16 px-4 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                 <div className='space-y-6'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-10">
                    Precisa de um especialista <b>para conduzir o seu processo trabalhista</b>
                    </h1>
                 

                 <p className="text-lg">Somos um escritório de advocacia especializado em Direito
                     do Trabalho, com atendimento online em toda Portugal</p>
                      
             
                    <a href="#" 
                    target="_blank"
                    className="bg-green-500 px-5 py-2 rounded-md font-semibold 
                    flex items-center w-fit gap-2">
                        <WhatsappLogoIcon className='w-5 h-5' />
                        Contacto via WhatApp
                    </a>
                 </div>

                 <div className='hidden md:block h-full'>
                    <Image
                    src={logoimg}
                    alt='Foto do logo da empresa'
                    className='object-contain'
                    />
                 </div>

                </article>
            </div>

        </section>
    )
}