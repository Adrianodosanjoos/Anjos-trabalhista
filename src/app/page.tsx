import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Depoimentos } from "./_components/depoimentos";




export default function Home() {
  return(
    <main className="bg-white ">
      <Hero />
      <About />
      <Depoimentos />

    </main>
  )
}