'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import Bruna  from "../../../public/1 (2).png";
import Carla  from "../../../public/2.jpg";
import Douglas from "../../../public/3.jpg";
import Mauro from "../../../public/4.jpg";
import José from "../../../public/5.jpg";
import cris from "../../../public/6.jpg";
import leo from "../../../public/7.jpg";
import Rui from "../../../public/8.jpg";
import Mika from "../../../public/9.jpg";
import Sandra from "../../../public/10.jpg";
import Monica from "../../../public/11.jpg";
import Victoria from "../../../public/12.jpg";
import Lourdes from "../../../public/13.jpg";
import Shirley from "../../../public/14.jpg";
import Ana from "../../../public/15.jpg";
import Elisa from "../../../public/16.jpg";
import Luis from "../../../public/17.jpg";

const depoimentos = [
   {
    name: "Bruna Carvalho",
     img: Bruna,
     description: "Fiquei muito satisfeita com o desfecho e sua atuação foi fundamental para isso."
   },
    {
    name: "Carla Sofia",
     image: Carla,
     description: "A organização e pontualidade no atendimento foram impecáveis."
   },
    {
    name: "Mauro Domingos",
     image: Mauro,
     description: "Seu domínio da área jurídica me impressionou e trouxe segurança."
   },
     {
    name: "Douglas Ferreira",
     image: Douglas,
     description: "Admiro sua paciência e disponibilidade para esclarecer todas as minhas dúvidas."
   },
     {
    name: "José Matos",
     image: José,
     description: "Foi ótimo contar com um profissional tão comprometido e acessível."
   },
   {
     name: "Cristiano Moura",
     image: cris,
     description: "A forma como você antecipou riscos me poupou de muitos problemas."
   },
   {
     name: "Leonardo de Oliveira",
     image: leo,
     description: "Sua postura ética e transparente trouxe tranquilidade ao longo do caminho."
   },
    {
     name: "Rui Marroni",
     image: Rui,
     description: "Foi muito valioso sentir que você realmente se importava com o meu caso."
   },
    {
     name: "Mikaelle Dias",
     image: Mika,
     description: "Sua atuação estratégica foi essencial para o resultado positivo."
   },
    {
     name: "Sandra Santos",
     image: Sandra,
     description: "Me senti amparada durante todo o processo, mesmo nos momentos mais difíceis."
   },
    {
     name: "Monica Werdine",
     image: Monica,
     description: "Sua dedicação ao meu caso foi evidente — obrigado por todo o esforço."
   },
      {
     name: "Sara Victoria",
     image: Victoria,
     description: "A clareza nas orientações me ajudou a tomar decisões mais assertivas."
   },
       {
     name: "Lourdes Teresa",
     image: Lourdes,
     description: - "Gostei do profissionalismo com que lidou com todas as etapas do processo."

   },
      {
     name: "Shirley Natali",
     image: Shirley,
     description: "Você me transmitiu muita confiança desde a primeira reunião."
   },
      {
     name: "Ana Ysadora",
     image: Ana,
     description: "A comunicação foi eficiente e sempre no tempo certo."
   },
       {
     name: "Elisa Assunção",
     image: Elisa,
     description: "Senti que você defendeu meus interesses com firmeza e empatia."
   },
      {
     name: "Luis Gustavo",
     image: Luis,
     description: - "Sua capacidade de explicar termos jurídicos de forma clara fez toda a diferença."

   },

]




export function Depoimentos() {

    const [emblaRef, emblaApi] = useEmblaCarousel({

        loop: true
    })


    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-black  py-16  max-h-1/2-50px">
            <div className="container  mx-auto px-4">


                <div className="relative ">

                    <h3 className="font-serif text-3xl text-white mb-12 flex align-text-center justify-center"  data-aos="fade-up-right">Depoimentos</h3>

                    <div className='overflow-hidden' ref={emblaRef}  data-aos="fade-up-left">
                        <div className='flex'>
                            {depoimentos.map((item, index) => (
                                <div key={index} className=' flex-[0_0_100%] min-w-0 px-3 md-flex md-items-center md-justify-center'>
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4
                                   flex flex-col'>

                                        <div className='flex flex-col items-center justify-center text-center space-y-4 h-full'>
                                            <div className='relative w-24 h-24'>
                                               <img  src={item.image}
                                                    alt='foto do depoimento'
                                                    quality={100}
                                                    className='select-none container h-64'/>
                                            </div>


                                        </div>

                                        <div className='border-t border-gray-700 pt-4'>
                                                <p className='font-bold font-serif'>{item.name}</p>
                                            </div>

                                            <div className='border-t border-gray-700 pt-4'>
                                                <p className='font-bold font-serif'>{item.description}</p>
                                            </div>
                                            
                                    </article>
                                </div>
                            ))}

                        </div>
                    </div>

                    <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 
                   -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'
                        onClick={scrollPrev}
                    >
                        <ChevronLeft
                            className='w-6 h-6 text-black '
                        />
                    </button>

                    <button className='bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 
                   -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'
                        onClick={scrollNext}
                    >
                        <ChevronRight
                            className='w-6 h-6 text-black'
                        />
                    </button>

                </div>
            </div>

        </section>
    )

}

