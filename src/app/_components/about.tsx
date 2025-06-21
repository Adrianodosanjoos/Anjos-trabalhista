import Image from "next/image"
import logoImg from '../../../public/1.png'
import sobreImg from '../../../public/foto.png'
import {CheckCircleIcon } from "@phosphor-icons/react"

export function About() {
    return(
      <section className="py-16">
        <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12
        items-end">
            
            <div className="relative">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                <Image
                src={sobreImg}
                alt="Sobre imagem"
                fill
                quality={100}
                className="object-cover hover:scale-105 duration-300"
                priority
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
                />
            </div>

            </div>

            <div className="space-y-6">
                 <h2 className="text-4xl font-bold">Sobre</h2>

                 <p>
                    Somos um escritório de advocacia especializado em Direito do Trabalho, com atendimento online em todo Portugal
                 </p>

                 <ul className="space-y-4">
                  <li>
                    <CheckCircleIcon />
                    Atendendo deste de 2015
                  </li>
                 </ul>
            </div>

        </div>
      </section>
    )
}