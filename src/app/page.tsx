import { About } from "./_components/about";
import { Hero } from "./_components/hero";



export default function Home() {
  return(
    <main className="bg-white ">
      <Hero />
      <About />
    </main>
  )
}