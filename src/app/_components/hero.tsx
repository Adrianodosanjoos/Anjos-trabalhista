import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import logoimg from '../../../public/1.png'
import balaçadajustiça from '../../../public/Balançadajustiça.png'
import Image from 'next/image'

export function Hero(){
    return(
        <section className="bg-white text-black relative overflow-hidden">
          
            <div className=' md:hidden relative bg-white'>
                <Image
                src={logoimg}
                alt='image top'
                className='absolute top-0 right-0 w-25 bg-white'
                quality={100}
                priority
                data-aos="fade-right"
                />
            </div>

            <div>
                <Image
                src={balaçadajustiça}
                alt='foto de fundo'
                fill
                sizes='100vw'
                priority
                className='object-cover opacity-60 md:hidden'
                />
                  <div className=' absolute inset-0 bg-black  opacity-5 md:hidden'></div>
            </div>

          

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                 <div className='space-y-6'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-10" data-aos="fade-right">
                    Precisa de um especialista <b>para conduzir o seu processo trabalhista</b>
                     
                    </h1>
                 

                 <p className="text-lg"  data-aos="fade-left">Somos um escritório de advocacia especializado em Direito
                     do Trabalho, com atendimento online em toda Portugal</p>
                      
             
                    <a href={`https://wa.me/351911992009?text= Olá vim pelo site e gostaria de saber como que faço, para abrir um processo contra uma empresa`} 
                    target="_blank"
                    className="bg-green-500 px-5 py-2 rounded-md font-semibold 
                    flex items-center w-fit gap-2 hover:scale-102 duration-300 text-white"  data-aos="fade-right">
                        <WhatsappLogoIcon className='w-5 h-5'  data-aos="fade-left"/>
                        Contacto via WhatApp
                    </a>
                 </div>

                 <div className='hidden md:block h-full relative'  data-aos="fade-right">
                    <Image
                    src={logoimg}
                    alt='Foto do logo da empresa'
                    className='object-contain'
                    fill
                    sizes='(max-width: 768px) 0px, 50vw'
                    quality={100}
                    priority
                    />
                 </div>



                </article>
            </div>

        </section>
    )
}