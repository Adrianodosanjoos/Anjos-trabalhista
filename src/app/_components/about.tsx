import Image from "next/image"
import logoImg from '../../../public/1.png'
import sobreImg from '../../../public/foto.png'
import { Check } from "@phosphor-icons/react/dist/ssr"
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'


export function About() {
    return (
        <section className="py-16">
            <div className="container mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

                    <div className="relative">

                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={sobreImg}
                                alt="Sobre imagem"
                                fill
                                quality={100}
                                className="object-cover hover:scale-105 duration-300"
                                priority
                                data-aos="fade-left"
                            />
                        </div>

                        <div className="absolute w-15 h-15 right-4 bottom-90 border-4 
              overflow-hidden border-white rounded-lg ">
                            <Image
                                src={logoImg}
                                alt="Sobre imagem"
                                fill
                                quality={100}
                                priority
                                 data-aos="fade-right"
                            />
                        </div>

                    </div>

                    <div className="space-y-6 text-black mt-10 px-4">
                        <h2 className="text-4xl font-bold text-center" data-aos="fade-left">Sobre</h2>

                        <p  data-aos="fade-right">
                            Somos um escritório de advocacia especializado em Direito do Trabalho, com atendimento online em toda Portugal
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2" data-aos="fade-left">
                                <Check className="text-red-500 font-bold"/>
                                Atendendo deste de 2010
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-right">
                                <Check className="text-red-500 font-bold"/>
                                Equipe com + 10 Advogados Associados
                            </li>
                            <li className="flex items-center gap-2"  data-aos="fade-left">
                                <Check className="text-red-500 font-bold" />
                                <b>+ 5000</b> Clientes atendidos
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-right">
                                <Check className="text-red-500 font-bold" />
                                <b>+ 110</b> Depoimentos
                            </li>
                        </ul>

                        <a href={`https://wa.me/351911992009?text= Olá vim pelo site e gostaria de saber como que faço, para abrir um processo contra uma empresa`}
                            target="_blank"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold 
                    flex items-center justify-center w-fit gap-2 hover:scale-102 duration-300 text-white" data-aos="fade-left">
                            <WhatsappLogoIcon className='w-5 h-5' />
                            Contacto via WhatApp
                        </a>
                    </div>


                </div>

            </div>
        </section>
    )
}