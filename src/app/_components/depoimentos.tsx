'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import Bruna  from "../../../public/1 (2).png";
import Carla  from "../../../public/2.jpg";

const depoimentos = [
   {
    name: "Bruna Carvalho",
     image: Bruna,
     description: "Fiquei muito satisfeita com o desfecho e sua atuação foi fundamental para isso."
   },
    {
    name: "Carla Sofia",
     image: Bruna,
     description: "A organização e pontualidade no atendimento foram impecáveis."
   },
]

export function Depoimentos(){
    return( 
        <section className="py-16">
            <div className="container mx-auto px-4">

                     <h2 className="text-black text-4xl font-bold mb-12 text-center"> Depoimentos </h2>
                       <div className="relative">

                       </div>
                
            </div>

           

        </section>
    ) }