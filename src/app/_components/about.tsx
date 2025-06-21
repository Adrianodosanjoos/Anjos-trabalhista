import Image from "next/image"
import logoImg from '../../../public/1.png'
import sobreImg from '../../../public/foto.png'

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

              <div className="absolute w-40 h-40 right-4 -bottom-8">
                <Image
                src={logoImg}
                alt="Sobre imagem"
                fill
                quality={100}
                priority
                />
            </div>

            </div>

        </div>
      </section>
    )
}