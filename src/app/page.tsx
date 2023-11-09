import Footer from "../components/Footer"
import Header from "../components/Header"
import GridPattern from '../components/GridPattern'

export default function Home() {
  return (
    <>
    <Header />
    <div className='relative flex flex-auto overflow-hidden bg-white pt-14' >
      <div className='relative isolate flex w-full flex-col pt-9' >
        <GridPattern />
        <main className='w-full flex-auto' >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-3xl">
                <h1 className="font-display text-5xl font-medium tracking-tight text-blue-950 [text-wrap:balance] sm:text-7xl">
                  Innovez avec confiance grâce à notre savoir-faire.
                </h1>
                <p className="mt-6 text-xl text-neutral-600">
                  Cultivez l'innovation grâce à notre expertise exceptionnelle en développement web, architecture de solutions cloud/devops.<br/> 
                  Nous transformons vos idées en réalité numérique.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Footer />
    </>
  )
}
